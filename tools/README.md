# tools

Offline generators for data that ships compiled into `musagpt/index.html`.
Nothing here runs at page load — these produce constants that are pasted in,
which is why the maps and prayer times work with no network at all.

| script | produces | pasted into |
|---|---|---|
| `mkmask.py` | run-length-encoded world land mask (160×74) | `WORLD_MASK` |
| `mkus.py`   | run-length-encoded CONUS mask (132×62)      | `US_MASK` |
| `sun.py`    | NOAA solar-position reference times          | nothing — it's the oracle the prayer-time tests check against |

`mkmask.py` and `mkus.py` print an ASCII preview so you can eyeball the
coastlines before trusting the encoded string.

`sun.py` is an independent implementation of the solar-position maths, used to
verify `prayerTimes()`. Keep it independent — if a bug is ever copied from the
app into this file, the test stops being a test.
