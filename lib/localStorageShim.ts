const ensureLocalStorage = () => {
  if (typeof window !== 'undefined') return;

  const existing = globalThis.localStorage as unknown;
  const hasGetItem =
    typeof existing === 'object' &&
    existing !== null &&
    typeof (existing as { getItem?: unknown }).getItem === 'function';

  if (hasGetItem) return;

  const store = new Map<string, string>();

  const shim: Storage = {
    getItem: (key) => (store.has(key) ? store.get(key)! : null),
    setItem: (key, value) => {
      store.set(key, String(value));
    },
    removeItem: (key) => {
      store.delete(key);
    },
    clear: () => {
      store.clear();
    },
    key: (index) => Array.from(store.keys())[index] ?? null,
    get length() {
      return store.size;
    },
  };

  globalThis.localStorage = shim;
};

ensureLocalStorage();
