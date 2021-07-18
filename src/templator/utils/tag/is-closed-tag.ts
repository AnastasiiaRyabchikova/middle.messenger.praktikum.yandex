const isClosedTag = (tag) => (
  tag.slice(0, 2) === '</'
);

export default isClosedTag;
