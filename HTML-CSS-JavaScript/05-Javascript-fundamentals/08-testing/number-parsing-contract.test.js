import { describe, expect, test } from "vitest";

function parseStrictAmount(value) {
  if (typeof value !== "string" && typeof value !== "number") {
    throw new TypeError("Expected a numeric input");
  }
  const normalized = String(value).trim();
  if (normalized.length === 0 || !/^(?:\d+(?:\.\d+)?|\.\d+)$/.test(normalized)) {
    throw new TypeError("Expected a non-negative decimal");
  }
  const parsed = Number(normalized);
  if (!Number.isFinite(parsed)) throw new RangeError("Number exceeds finite range");
  return parsed;
}

describe("strict numeric parsing", () => {
  test.each([["0", 0], ["12.50", 12.5], [".75", 0.75], [5, 5]])(
    "accepts %s as %s", (input, expected) => {
      expect(parseStrictAmount(input)).toBe(expected);
    },
  );

  test.each(["", " ", "1e3", "0x10", "-1", "Infinity", true, null, {}])(
    "rejects coercion input %s", (input) => {
      expect(() => parseStrictAmount(input)).toThrow();
    },
  );
});
