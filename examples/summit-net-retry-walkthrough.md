# Summit Net Retry Forge Walkthrough

I use this file as a small checklist before changing the TypeScript implementation.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 150 | ship |
| stress | retry pressure | 161 | ship |
| edge | route drift | 238 | ship |
| recovery | socket risk | 226 | ship |
| stale | packet span | 164 | ship |

Start with `edge` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

`edge` is the optimistic case; use it to make sure the scoring path still rewards strong signal.
