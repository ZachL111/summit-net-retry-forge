import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 87,
    "capacity": 71,
    "latency": 25,
    "risk": 21,
    "weight": 10,
    "score": 115,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 86,
    "capacity": 92,
    "latency": 9,
    "risk": 16,
    "weight": 4,
    "score": 177,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 80,
    "capacity": 75,
    "latency": 13,
    "risk": 7,
    "weight": 4,
    "score": 181,
    "decision": "accept"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
