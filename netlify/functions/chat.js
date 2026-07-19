/*
 * MusaGPT chat proxy (Netlify Function).
 *
 * Keeps AI keys server-side: set ANTHROPIC_API_KEY and/or OPENAI_API_KEY in
 * the Netlify site's environment variables and the app's live mode works for
 * every visitor with no key in the browser.
 *
 *   GET  /api/chat  -> { ok: true, providers: { anthropic, openai } }
 *   POST /api/chat  -> { text } | { text: "", refusal: true } | { error }
 *
 * Guardrails: model allowlist, message count/length caps, token caps.
 * Note: a public deployment spends the owner's credits — keep spend limits on
 * the provider account, or add auth/rate limiting here before sharing widely.
 */

const MODELS = {
  anthropic: ["claude-haiku-4-5", "claude-fable-5"],
  openai: ["gpt-4o-mini", "gpt-5", "gpt-5.2", "gpt-5.5", "gpt-5.6"],
};

exports.handler = async (event) => {
  const json = (statusCode, body) => ({
    statusCode,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
    body: JSON.stringify(body),
  });
  const keys = {
    anthropic: process.env.ANTHROPIC_API_KEY || "",
    openai: process.env.OPENAI_API_KEY || "",
  };

  if (event.httpMethod === "GET") {
    return json(200, { ok: true, providers: { anthropic: !!keys.anthropic, openai: !!keys.openai } });
  }
  if (event.httpMethod !== "POST") return json(405, { error: "method not allowed" });

  let body;
  try { body = JSON.parse(event.body || "{}"); }
  catch (e) { return json(400, { error: "invalid json" }); }

  const model = String(body.model || "");
  const provider = MODELS.anthropic.includes(model) ? "anthropic"
    : MODELS.openai.includes(model) ? "openai" : null;
  if (!provider) return json(400, { error: "model not allowed" });
  if (!keys[provider]) return json(503, { error: provider + " key not configured on this deployment" });

  if (!Array.isArray(body.messages) || body.messages.length === 0 || body.messages.length > 24) {
    return json(400, { error: "messages must be a non-empty array (max 24)" });
  }
  const messages = body.messages.map((m) => ({
    role: m && m.role === "assistant" ? "assistant" : "user",
    content: String((m && m.content) || "").slice(0, 6000),
  }));
  const system = String(body.system || "").slice(0, 12000);

  try {
    if (provider === "anthropic") {
      const req = {
        model,
        system,
        messages,
        max_tokens: model === "claude-fable-5" ? 4096 : 1024,
      };
      // Fable 5: thinking is always on (never send a thinking param) and
      // counts toward max_tokens; low effort keeps chat snappy.
      if (model === "claude-fable-5") req.output_config = { effort: "low" };
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": keys.anthropic,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify(req),
      });
      const data = await r.json().catch(() => null);
      if (!r.ok) return json(502, { error: (data && data.error && data.error.message) || "upstream " + r.status });
      if (data.stop_reason === "refusal") return json(200, { text: "", refusal: true });
      const text = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("");
      return json(200, { text });
    }

    // openai
    const req = { model, messages: [{ role: "system", content: system }, ...messages] };
    // GPT-5-family reasoning models take max_completion_tokens (includes
    // reasoning tokens) and reject max_tokens; 4o-era models use max_tokens.
    if (/^gpt-5/.test(model)) req.max_completion_tokens = 2048;
    else req.max_tokens = 1024;
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: "Bearer " + keys.openai },
      body: JSON.stringify(req),
    });
    const data = await r.json().catch(() => null);
    if (!r.ok) return json(502, { error: (data && data.error && data.error.message) || "upstream " + r.status });
    return json(200, { text: (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "" });
  } catch (e) {
    return json(502, { error: String((e && e.message) || e) });
  }
};
