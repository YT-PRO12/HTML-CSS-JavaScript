import { describe, expect, test } from "vitest";

async function settleTasks(tasks) {
  return Promise.allSettled(tasks.map((task) => task()));
}

describe("Promise.allSettled contracts", () => {
  test("retains input order despite different completion outcomes", async () => {
    const results = await settleTasks([
      async () => "first",
      async () => { throw new Error("synthetic failure"); },
      async () => "third",
    ]);
    expect(results.map((item) => item.status)).toEqual([
      "fulfilled", "rejected", "fulfilled",
    ]);
    expect(results[0].value).toBe("first");
    expect(results[1].reason.message).toBe("synthetic failure");
    expect(results[2].value).toBe("third");
  });

  test("an empty batch returns no results", async () => {
    await expect(settleTasks([])).resolves.toEqual([]);
  });
});
