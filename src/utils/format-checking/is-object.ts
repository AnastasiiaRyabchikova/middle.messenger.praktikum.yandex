export default (value: unknown): value is Record<string, unknown> => {
  if (!value) {
    return false;
  }

  if (Array.isArray(value)) {
    return false;
  }

  return typeof value === 'object';
};
