export default (value: any): value is object => (
  value && typeof value === 'object' && !Array.isArray(value)
);
