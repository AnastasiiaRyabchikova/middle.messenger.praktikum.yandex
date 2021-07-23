export default (value: unknown): boolean => (
  value && typeof value === 'object' && !Array.isArray(value)
);
