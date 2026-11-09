# React notes and practice projects

My working folder from learning React (following Hitesh Choudhary's React course). Each folder is a small standalone app; most are Vite + React, a few use Tailwind. These are exercises, not finished products.

| Folder | What it covers |
|---|---|
| `customReact/` | A tiny `customRender()` that turns a React-style element object (`type`, `props`, `children`) into a DOM node, to see what React does underneath |
| `01basicreactapp/` | Create React App starter |
| `01basicvite/` | Vite starter with a first custom component |
| `project1/` | Counter with `useState` |
| `project2/` | Tailwind setup in Vite |
| `project3/` | Background color changer with `useState` |
| `project4/` | Password generator: `useState`, `useCallback`, `useEffect`, copy to clipboard |
| `07reactRouter/` | React Router: `createBrowserRouter`, shared `Layout` with `Outlet`, `NavLink` header |
| `miniContext/` | Context API practice (login component, in progress) |
| `bgChangerUsingContextAPI/` | Light/dark theme toggle with `createContext`, a provider and a `useTheme` hook |

## Running a project

```bash
cd project4          # or any Vite folder
npm install
npm run dev
```

`01basicreactapp` uses `npm start`. `customReact` is plain HTML + JS; open `customReact/index.html` in a browser.
