# musa-core-3 source modules

The ten classical-NLP modules that make up musa-core-3. Each is standalone,
dependency-free, and carries its own self-test — run any of them directly:

    node tools/core/stem.js        # 97 assertions
    node tools/core/metrics.js     # 68
    node tools/core/sentiment.js   # 41   (580-term lexicon)
    node tools/core/ner.js         # 82   (433-place gazetteer)
    node tools/core/summarize.js   # 41
    node tools/core/cluster.js     # 37   (200 headlines in ~14ms)
    node tools/core/lm.js          # 42
    node tools/core/qa.js          # 47
    node tools/core/dialog.js      # 65
    node tools/core/calc.js        # 144

These files are the source of truth. `tools/merge-core.py` strips the
node-only self-tests, resolves cross-module name collisions (three modules
independently wrote their own stemmer) and emits the single script block that
lives inside `musagpt/index.html`. Fix a bug **here** first, then re-merge —
otherwise the next merge silently reverts it.

The self-tests are the real specification: several of them encode traps that
cost real debugging time (the Porter `yy` disagreement between the two
reference implementations, PageRank's dangling-node divide-by-zero, IDF going
to zero on an all-identical corpus, `^` right-associativity, temperature
before top-k, silent-e on a pronounced `-ue`).
