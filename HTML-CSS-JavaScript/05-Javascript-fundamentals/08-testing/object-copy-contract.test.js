import { describe, expect, test } from "vitest";

describe("object identity and copying", () => {
  test("shallow object spread does not clone nested objects", () => {
    const original = { name: "Synthetic", settings: { theme: "light" } };
    const shallow = { ...original };
    shallow.settings.theme = "dark";

    expect(original.settings.theme).toBe("dark");
    expect(shallow).not.toBe(original);
    expect(shallow.settings).toBe(original.settings);
  });

  test("structuredClone isolates nested plain data", () => {
    const original = { scores: [1, 2], metadata: { active: true } };
    const copy = structuredClone(original);
    copy.scores.push(3);
    copy.metadata.active = false;

    expect(original.scores).toEqual([1, 2]);
    expect(original.metadata.active).toBe(true);
  });

  test("Object.freeze is shallow", () => {
    const original = Object.freeze({ nested: { count: 1 } });
    original.nested.count = 2;
    expect(original.nested.count).toBe(2);
    expect(() => { original.other = true; }).toThrow(TypeError);
  });
});
