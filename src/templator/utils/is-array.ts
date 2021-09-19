export default (value: unknown): value is Array<any> => (
  Array.isArray(value)
);
