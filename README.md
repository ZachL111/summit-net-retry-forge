# summit-net-retry-forge

`summit-net-retry-forge` is a TypeScript project in networking. Its focus is to design a TypeScript verification harness for retry systems, covering visual model generation, layout fixtures, and failure-oriented tests.

## Why I Keep It Small

This is intentionally local and self-contained so it can be inspected without credentials, services, or seeded history.

## Summit Net Retry Forge Review Notes

The first comparison I would make is `route drift` against `packet span` because it shows where the rule is most opinionated.

## Included Behavior

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/summit-net-retry-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `route drift` and `packet span`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Internal Model

The repository has two validation layers: the original compact policy fixture and the domain review fixture. They are separate so one can change without hiding failures in the other.

The TypeScript addition stays small enough to inspect in one sitting.

## Try It Locally

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Validation

The same command runs the local verification path. The highest-scoring domain case is `edge` at 238, which lands in `ship`. The most cautious case is `baseline` at 150, which lands in `ship`.

## Scope

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
