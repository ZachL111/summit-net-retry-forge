function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 50, slack: 28, drag: 14, confidence: 64 };
equal(domainReviewScore(item), 150);
equal(domainReviewLane(item), "ship");
