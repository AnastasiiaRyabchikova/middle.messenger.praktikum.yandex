export default (value: unknown): boolean => (
  typeof value === 'number' && !Number.isNaN(value)
);
