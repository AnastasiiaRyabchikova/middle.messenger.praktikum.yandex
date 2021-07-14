export default (value) => (
  typeof value === 'number' && !Number.isNaN(value)
);
