import { describe, expect, test } from "vitest";

function waitForCancellation(signal) {
  if (signal.aborted) return Promise.reject(new Error("Cancelled"));
  return new Promise((_resolve, reject) => {
    const onAbort = () => {
      signal.removeEventListener("abort", onAbort);
      reject(new Error("Cancelled"));
    };
    signal.addEventListener("abort", onAbort, { once: true });
  });
}

describe("AbortController cancellation", () => {
  test("an already-aborted signal rejects immediately", async () => {
    const controller = new AbortController();
    controller.abort();
    await expect(waitForCancellation(controller.signal)).rejects.toThrow("Cancelled");
  });

  test("an in-flight operation rejects when aborted", async () => {
    const controller = new AbortController();
    const pending = waitForCancellation(controller.signal);
    controller.abort();
    await expect(pending).rejects.toThrow("Cancelled");
  });

  test("signals are independent across requests", async () => {
    const first = new AbortController();
    const second = new AbortController();
    const firstResult = waitForCancellation(first.signal);
    first.abort();
    await expect(firstResult).rejects.toThrow("Cancelled");
    expect(second.signal.aborted).toBe(false);
  });
});
