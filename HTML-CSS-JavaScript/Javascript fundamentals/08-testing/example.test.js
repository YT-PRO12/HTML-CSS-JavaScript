import { describe, expect, test } from "vitest";

function add(a, b) {
  return a + b;
}

describe("add", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("supports negative numbers", () => {
    expect(add(-2, 3)).toBe(1);
  });
});
