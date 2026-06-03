import { expect, test } from "bun:test";
import { sum } from "@/models/calc";

test("should return 10 when summing 5 + 5", () => {
  expect(sum(5, 5)).toBe(10);
});

test("should return 105 when summing 100 + 5", () => {
  expect(sum(100, 5)).toBe(105);
});
