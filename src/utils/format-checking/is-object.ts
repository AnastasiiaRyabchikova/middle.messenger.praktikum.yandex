export default (value) => (
  value && typeof value === 'object' && !Array.isArray(value)
);
