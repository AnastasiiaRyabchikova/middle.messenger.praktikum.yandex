export default (value: unknown): value is object => (
  value && typeof value === 'object' && !Array.isArray(value)
);
