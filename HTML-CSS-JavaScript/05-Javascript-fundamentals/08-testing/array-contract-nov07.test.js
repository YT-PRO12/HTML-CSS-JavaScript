import { describe, expect, test } from "vitest";

function sortedUniqueNumbers(values) {
  if (!Array.isArray(values) || values.some((value) => !Number.isFinite(value))) {
    throw new TypeError("Expected a list of finite numbers");
  }
  return [...new Set(values)].sort((a, b) => a - b);
}

describe("sortedUniqueNumbers", () => {
  test("sorts numerically, removes duplicates, and preserves input", () => {
    const original = [10, 2, -1, 2];
    expect(sortedUniqueNumbers(original)).toEqual([-1, 2, 10]);
    expect(original).toEqual([10, 2, -1, 2]);
  });

  test("supports an empty array", () => {
    expect(sortedUniqueNumbers([])).toEqual([]);
  });

  test.each([null, "10,2", [Number.NaN], [Infinity]])(
    "rejects invalid input %s",
    (value) => expect(() => sortedUniqueNumbers(value)).toThrow(TypeError),
  );
});
