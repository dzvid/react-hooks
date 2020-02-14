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


