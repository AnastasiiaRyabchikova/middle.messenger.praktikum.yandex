export default (value: any): value is Record<string, unknown> => (
  Boolean(value) && typeof value === 'object'
);
