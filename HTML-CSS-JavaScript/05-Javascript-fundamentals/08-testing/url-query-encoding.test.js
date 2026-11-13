import { describe, expect, test } from "vitest";

function buildSearchUrl(term, page = 1) {
  if (typeof term !== "string" || !Number.isSafeInteger(page) || page < 1) {
    throw new TypeError("Expected a search string and positive page number");
  }
  const url = new URL("https://example.invalid/search");
  url.searchParams.set("q", term);
  url.searchParams.set("page", String(page));
  return url;
}

describe("URLSearchParams contracts", () => {
  test("encodes spaces, ampersands, and Unicode without losing content", () => {
    const term = "C++ & café";
    const url = buildSearchUrl(term, 2);
    expect(url.searchParams.get("q")).toBe(term);
    expect(url.searchParams.get("page")).toBe("2");
    expect(url.search).not.toContain(" & ");
  });

  test("does not permit a query string to create extra parameters", () => {
    const url = buildSearchUrl("x&admin=true");
    expect(url.searchParams.get("q")).toBe("x&admin=true");
    expect(url.searchParams.has("admin")).toBe(false);
  });

  test.each([0, -1, 1.5, Number.POSITIVE_INFINITY])(
    "rejects invalid page number %s",
    (page) => expect(() => buildSearchUrl("test", page)).toThrow(TypeError),
  );
});
