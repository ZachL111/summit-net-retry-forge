import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 50, slack: 28, drag: 14, confidence: 64 };
assert.equal(domainReviewScore(item), 150);
assert.equal(domainReviewLane(item), "ship");
