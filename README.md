# Todo List React

A todo list application built with React 18 and Vite.

## Features

- Add, delete and search todo items
- Mark items as done or important
- Filter by status: All / Active / Done

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Scripts

| Command | Description |
|---|---|
| `npm start` | Start dev server on port 3000 |
| `npm run build` | Production build to `dist/` folder |
| `npm run preview` | Preview production build locally |

## Tech Stack

- **React 18** with class components
- **Vite 6** for bundling and dev server
- **SCSS** for styling (Dart Sass)
- **react-svg** for inline SVG icons

## Project Structure

```
src/
  index.jsx                  # Entry point (React 18 createRoot)
  img/                       # Images (background)
  sass/                      # Shared SCSS (variables, mixins, base)
  components/
    App/                     # Root component, owns all state
    Header/                  # Todo/done counts
      Done/
    Center/                  # Layout wrapper
      Search/                # Search input + filter buttons
        Input/
        PanelButtons/
      TodoList/              # List of todo items
        Item/
    AddNew/                  # New item form
    Button/                  # Reusable SVG button
public/
  img/svg/                   # SVG icons
```
