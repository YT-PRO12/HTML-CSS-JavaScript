# Browser input and DOM safety

Browser exercises should treat query parameters, API responses, and form values as untrusted data.

Prefer `textContent` when rendering user-provided strings. Do not use `innerHTML` for arbitrary input. When a template must contain markup, use trusted static structure and fill individual text nodes separately.

When building links, validate destination schemes and use `rel="noopener noreferrer"` when opening third-party links in a new tab. Never embed API secrets or backend credentials in browser JavaScript. Client-side checks improve UX but are not a substitute for server-side validation.

## Practical checks

- Try HTML-like input such as `<img>` and verify it appears as inert text.
- Handle empty and malformed API responses.
- Restrict allowed URL protocols rather than concatenating untrusted strings.
- Avoid persisting sensitive data in `localStorage`.
- Review permissions and data retention for any third-party integration.

This is a code-review guide, not a security certification.
