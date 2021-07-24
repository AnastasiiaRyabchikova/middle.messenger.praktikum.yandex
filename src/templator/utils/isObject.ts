export default (value: any): value is object => (
  Boolean(value) && typeof value === 'object'
);
