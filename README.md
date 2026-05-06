# summit-net-retry-forge

`summit-net-retry-forge` packages a practical networking exercise in TypeScript. The emphasis is on deterministic behavior, a small public API, and examples that explain the tradeoffs.

## How I Read Summit Net Retry Forge

The useful thing to inspect here is how the same score rule is represented in code, metadata, and examples. If those three pieces disagree, the audit script should make the drift visible.

## Main Behaviors

- Includes extended examples for retry behavior, including `surge` and `degraded`.
- Documents policy decisions tradeoffs in `docs/operations.md`.
- Runs locally with a single verification command and no external credentials.
- Stores project constants and verification metadata in `metadata/project.json`.
- Adds a repository audit script that checks structure before running the language verifier.

## Problem Shape

This is not a wrapper around a service. It is a self-contained project that shows how the model behaves when demand, capacity, latency, risk, and weight move in different directions.

## Repository Map

- `src`: primary implementation
- `tests`: verification harness
- `fixtures`: compact golden scenarios
- `examples`: expanded scenario set
- `metadata`: project constants and verification metadata
- `docs`: operations and extension notes
- `scripts`: local verification and audit commands
- `package.json`: Node package scripts

## Internal Model

The design is intentionally direct: parse or construct a signal, score it, classify it, and verify the expected branch. This makes the repository useful for studying networking behavior without needing a service or database unless the language project itself is SQL. The TypeScript project keeps types close to the model and compiles before running its checks.

## How To Run It

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

This runs the language-level build or test path against the compact fixture set.

## Scenario Walkthrough

`surge` is the first example I would inspect because it lands on the `accept` path with a score of 205. The broader file also keeps `degraded` at -6 and `surge` at 205, which gives the model a useful low-to-high spread.

## Validation

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/audit.ps1
```

The audit command checks repository structure and README constraints before it delegates to the verifier.

## Known Edges

The examples cover useful edges, not every edge. A larger version would add malformed-input tests, richer reports, and deeper domain parsers.

## Follow-Up Work

- Add a loader for `examples/extended_cases.csv` and promote selected cases into the language test suite.
- Add a short report command that prints the score breakdown for a single scenario.
- Add malformed input fixtures so the failure path is as visible as the happy path.
- Add one more networking fixture that focuses on a malformed or borderline input.

## Run It Locally

The only required setup is the local TypeScript toolchain. After cloning, stay in the repo root so fixture paths resolve correctly.
