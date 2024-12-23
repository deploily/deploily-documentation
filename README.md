# 📚 Deploily Documentation

## Tools tailored for different needs:

1. Sphinx
Best For: Python projects, but also works for other languages with plugins.
Features: Generates comprehensive, structured documentation; integrates with reStructuredText and Markdown; and supports multi-language documentation.
Output: HTML, PDF, LaTeX, ePub.
Pros: Highly customizable, has extensive plugin support (e.g., Read the Docs integration).
Cons: Has a learning curve and may feel complex for smaller projects.

2. Doxygen
Best For: C, C++, Java, Python, and other languages.
Features: Extracts comments directly from code to generate structured documentation; supports diagrams and visualizations with Graphviz.
Output: HTML, PDF, RTF, LaTeX.
Pros: Handles large codebases well; versatile with many configuration options.
Cons: Limited styling options and can be challenging to set up for first-time users.

3. JSDoc
Best For: JavaScript and TypeScript projects.
Features: Automatically generates documentation from JavaScript comments, with good support for ES6 and TypeScript.
Output: HTML.
Pros: Easy to use for JavaScript/TypeScript projects, with many themes available.
Cons: Limited to JavaScript/TypeScript, with basic styling options.

4. MkDocs
Best For: Simple, Markdown-based documentation, often for static sites.
Features: Lightweight and straightforward; builds static sites with easy-to-use themes like Material for MkDocs.
Output: Static HTML.
Pros: Quick setup, beautiful themes, perfect for static documentation sites.
Cons: Limited advanced features compared to Sphinx, mainly geared toward Markdown.

5. Swagger / OpenAPI
Best For: API documentation.
Features: Designed for RESTful API documentation; includes interactive API explorer and JSON/YAML spec generation.
Output: Interactive HTML, JSON/YAML specs.
Pros: Excellent for creating, testing, and sharing APIs; interactive documentation.
Cons: Not suitable for non-API documentation.

6. Typedoc
Best For: TypeScript projects.
Features: Similar to JSDoc but built specifically for TypeScript, with a focus on type-safe documentation.
Output: HTML.
Pros: Type-safe documentation generation for TypeScript; simple setup.
Cons: Limited to TypeScript projects.

7. DocFX
Best For: .NET and cross-platform projects.
Features: Supports Markdown and C# XML comments for comprehensive documentation generation.
Output: HTML, PDF.
Pros: Built by Microsoft for .NET projects, versatile, handles large-scale documentation.
Cons: Primarily for .NET and Microsoft stack, though adaptable for other languages.

## Choosing the Right Tool
For Code-Heavy Projects: Doxygen, Sphinx, JSDoc, Typedoc, or DocFX.
For API Documentation: Swagger/OpenAPI, Redoc.
For General Documentation: MkDocs with Material theme for simple sites, Sphinx for complex needs.

## Useful links

- [https://squidfunk.github.io/mkdocs-material/getting-started/](https://squidfunk.github.io/mkdocs-material/getting-started/)


# 🛠️ Development

```bash
npm run build

npm run serve
