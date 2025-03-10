# Conventions
This document outlines the coding and project structure conventions for the Orleans Games project. Adhering to these conventions ensures consistency, readability, and maintainability across the project.

## General Guidelines
- Follow clean code principles: meaningful variable names, modular functions, and clear comments.
- Use `camelCase` for variable and function names.
- Use `PascalCase` for React components.
- Keep code DRY (Don't Repeat Yourself) by reusing components and functions.

## File and Folder Naming
- Use `lowercase` for folders and `kebab-case` for filenames (e.g., game-thumbnails, nav-bar.jsx).
- Component files should match the component name (e.g., Nav.jsx, Footer.jsx).
- CSS files should be named after their corresponding component (e.g., nav.css for Nav.jsx).
- JSON files should be named in `lowercase` with hyphens if needed (e.g., games-data.json).

## React Components
- Functional components should be used instead of class components.
- Each component should be in its own file inside /components or an appropriate subdirectory.
- Keep components small and reusable.
- Use prop-types to define expected props for components.

## CSS Guidelines
- Use BEM (Block Element Modifier) methodology for class naming.
- Keep CSS files modular and scoped per component.
- Use media.css for responsive styling.
- Avoid using inline styles unless absolutely necessary.

## JavaScript Conventions
- Use ES6+ syntax (`const`, `let`, arrow functions, destructuring, etc.).
- Always use `===` instead of `==`.
- Prefer `map`, `filter`, and `reduce` over traditional loops where possible.
- Use template literals instead of string concatenation.
- Use async/await for handling asynchronous operations.

## Commit Message Guidelines
- Use clear and concise commit messages.
- Follow this format:
    - `feat`: for new features
    - `fix`: for bug fixes
    - `refactor`: for code restructuring
    - `docs`: for documentation updates
    - `style`: for formatting and styling changes (no functional changes)
    - `test`: for adding or updating tests

## Deployement Conventions
- Always run `npm run build` before uploading to the server.
- Upload the contents of the `/dist` folder to `/vite-react` in the FileZilla server.
- Ensure the `index.html` file is renamed to `index.php` after upload.
- Avoid modifying the `/images` folder unless necessary.

## Contribution Guidelines
- Follow the development setup outlined in `README.md`.
- Ensure code follows project conventions before submitting.
- All changes should be tested locally before pushing.
- If making significant changes, document them in `CONTRIBUTING.md`.

By following these conventions, we can maintain a structured and efficient development process for Orleans Games.