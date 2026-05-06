function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
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
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
