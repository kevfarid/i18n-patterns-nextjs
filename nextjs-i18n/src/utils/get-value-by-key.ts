function getByPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce((acc, segment) => {
    if (acc && typeof acc === 'object' && acc !== null && segment in acc) {
      return (acc as Record<string, unknown>)[segment];
    }

    console.error(
      `I18N library: Expected an object at path "${path}", but got ${typeof acc}`
    );
    return path;
  }, obj);
}

export default function getValueByKey<
  T extends Record<string, unknown>,
  K extends string
>(obj: T, key: K, initialKey?: K): unknown {
  const base = initialKey ? getByPath(obj, initialKey) : obj;

  if (typeof base !== 'object' || base === null) {
    console.error(
      `I18N library: Expected an object at initialKey "${initialKey}", but got ${typeof base}`
    );
    return key;
  }

  return key ? getByPath(base, key) : base;
}
