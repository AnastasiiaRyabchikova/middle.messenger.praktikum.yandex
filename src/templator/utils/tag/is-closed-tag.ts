const isClosedTag = (tag: string): boolean => (
  tag.slice(0, 2) === '</'
);

export default isClosedTag;
