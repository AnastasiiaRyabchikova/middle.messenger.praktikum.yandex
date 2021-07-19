export default (value: any): boolean => (
  Boolean(value) && typeof value === 'object'
);
