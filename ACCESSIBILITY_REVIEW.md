# Frontend accessibility review

Use this checklist when adding or updating a standalone HTML, CSS, or JavaScript exercise.

## Keyboard and semantics

- Prefer native buttons, links, form controls, labels, and headings over generic clickable divs.
- Ensure all actions work with Tab, Enter, and Space where appropriate.
- Preserve a visible focus indicator; do not replace it with `outline: none` unless an accessible alternative exists.
- Use a logical heading sequence and meaningful link names.
- Keep form error messages adjacent to their controls, and associate them using accessible descriptions.

## Visual and interaction checks

- Check 320px, tablet, and desktop widths for horizontal overflow.
- Respect `prefers-reduced-motion` for nonessential animation.
- Provide descriptive alt text for informative images; leave purely decorative images out of the accessibility tree.
- Verify sufficient contrast in both default and hover/focus states.
- Test loading, empty, invalid-input, and offline/network-error states.

## Security basics

Render user-supplied strings as text by default, not by inserting them into `innerHTML`. Do not store credentials in frontend source code.

A checklist is not a passed accessibility audit. Record the browser, viewport, test date, and unresolved issues when reviewing a specific exercise.
