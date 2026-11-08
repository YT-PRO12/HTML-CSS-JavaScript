import { describe, expect, test } from "vitest";

async function loadRecord(fetchRecord, id) {
  if (!Number.isSafeInteger(id) || id < 1) {
    throw new RangeError("Invalid record identifier");
  }
  const result = await fetchRecord(id);
  if (!result || typeof result.name !== "string") {
    throw new TypeError("Malformed record response");
  }
  return result.name;
}

describe("async data contracts", () => {
  test("awaits a valid async result", async () => {
    const fetchRecord = async (id) => ({ id, name: "Synthetic sample" });
    await expect(loadRecord(fetchRecord, 1)).resolves.toBe("Synthetic sample");
  });

  test("rejects invalid identifiers before fetching", async () => {
    let called = false;
    const fetchRecord = async () => { called = true; };
    await expect(loadRecord(fetchRecord, 0)).rejects.toThrow(RangeError);
    expect(called).toBe(false);
  });

  test("propagates network failures", async () => {
    const fetchRecord = async () => { throw new Error("network offline"); };
    await expect(loadRecord(fetchRecord, 2)).rejects.toThrow("network offline");
  });

  test("rejects incomplete provider results", async () => {
    await expect(loadRecord(async () => ({}), 3)).rejects.toThrow(TypeError);
  });
});
