# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — Start dev server (Create React App, port 3000)
- `npm run build` — Production build
- `npm test` — Run tests (Jest via react-scripts, interactive watch mode)
- `npm test -- --watchAll=false` — Run tests once (CI mode)
- `npm test -- --testPathPattern=<path>` — Run a single test file

## Architecture

React 16 class-component todo app bootstrapped with Create React App. Styles use SCSS (node-sass). No routing, no external state management — all state lives in the root `App` component.

### State (in `App`)

`todoData` array of `{ id, label, important, done }` objects, plus `term` (search string) and `filter` (`'all' | 'active' | 'done'`). State is mutated immutably via `setState` with spread/slice patterns. A shared `toToggleProperty(arr, id, propertyName)` helper handles toggling boolean fields.

### Component tree

```
App (src/components/App/app.js) — owns all state and callbacks
├── AppHeader — displays todo/done counts
│   └── Done
└── Center — layout wrapper, passes props through
    ├── SearchPanel
    │   ├── SearchInput — text search bound to `term`
    │   └── PanelButtons — filter buttons (All/Active/Done)
    ├── TodoList
    │   └── ListItem — individual todo with done/important/delete actions
    └── AddNew — input form to create new items
```

### Styling

Each component has a co-located `.scss` file. Shared SCSS variables, mixins, and base styles are in `src/sass/` (`_variables.scss`, `_mixins.scss`, `_base.scss`).
