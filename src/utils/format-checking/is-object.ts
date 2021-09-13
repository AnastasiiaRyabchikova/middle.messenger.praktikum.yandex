export default (value: any): value is Record<string, unknown> => (
  value && typeof value === 'object' && !Array.isArray(value)
);
