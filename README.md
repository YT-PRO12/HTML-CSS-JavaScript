# HTML, CSS & JavaScript Practice

A structured set of frontend fundamentals and browser-based projects, from semantic markup to asynchronous JavaScript and engineering patterns.

## Curriculum

The [main study directory](HTML-CSS-JavaScript/) contains:

| Area | Directory |
| --- | --- |
| HTML syntax and semantics | [HTML fundamentals](HTML-CSS-JavaScript/01-HTML-Fundamentals/) |
| HTML exercises | [HTML projects](HTML-CSS-JavaScript/02-HTML-Projects/) |
| CSS layout and responsive design | [CSS fundamentals](HTML-CSS-JavaScript/03-CSS-Fundamentals/) |
| Applied layouts | [CSS projects](HTML-CSS-JavaScript/04-CSS-Projects/) |
| Language, DOM, async and testing patterns | [JavaScript fundamentals](HTML-CSS-JavaScript/05-Javascript-fundamentals/) |
| Browser applications | [JavaScript projects](HTML-CSS-JavaScript/06-Javascript%20Projects/) |

## Run and review

Open static HTML examples in a browser, or use a local HTTP server from a relevant project directory:

```bash
python -m http.server 8000
```

Browse to `http://localhost:8000`. For projects with a `package.json`, inspect its scripts and install dependencies in that project directory rather than assuming one command applies to every exercise.

## Quality checklist

- Use semantic controls with accessible labels, keyboard focus, and meaningful error feedback.
- Keep layouts usable at mobile and desktop widths.
- Validate data before rendering it; avoid injecting untrusted input as HTML.
- Handle API loading and network errors, including empty responses.
- Test a clean browser session and document dependencies for each standalone project.

Exercises are learning implementations, not claimed deployed applications. Contributions should preserve existing projects while improving clarity and behavior.
