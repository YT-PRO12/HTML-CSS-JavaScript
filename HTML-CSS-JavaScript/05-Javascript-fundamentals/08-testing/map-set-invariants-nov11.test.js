import { describe, expect, test } from "vitest";

describe("Map and Set identity", () => {
  test("Map overwrites existing keys without changing entry count", () => {
    const counts = new Map();
    counts.set("apple", 1);
    counts.set("apple", 2);
    counts.set("pear", 1);

    expect(counts.size).toBe(2);
    expect(counts.get("apple")).toBe(2);
    expect([...counts.keys()]).toEqual(["apple", "pear"]);
  });

  test("Set deduplicates primitives but preserves distinct objects", () => {
    const first = { id: 1 };
    const second = { id: 1 };
    const values = new Set([1, 1, first, first, second]);

    expect(values.size).toBe(3);
    expect(values.has(first)).toBe(true);
    expect(values.has(second)).toBe(true);
  });

  test("missing Map entries are undefined, not zero", () => {
    const counts = new Map([["known", 0]]);
    expect(counts.has("known")).toBe(true);
    expect(counts.has("missing")).toBe(false);
    expect(counts.get("missing")).toBeUndefined();
  });
});
