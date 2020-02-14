Class notes - React Hooks

---

1 Install ESLint plugin for React hooks linting:

```sh
yarn add --dev eslint-plugin-react-hooks
```

---

Hooks:

- useState: returns an item and a method to update its value;
- useEffect:
  - An useEffect with dependencies is equivalent to componentDidUpdate()
  - An useEffect with empty dependencies is equivalent to componentDidMount()
- useMemo: useMemo will only recompute the memoized value when one of the deps has changed.
- useCallback: Like useMemo, but returns a function. Used when the function uses deps.
  For normal functions JS has to allocate memory everytime the code is executed, i.e an input value, using useCallback() will allocate memory for the function only when the state deps change.
