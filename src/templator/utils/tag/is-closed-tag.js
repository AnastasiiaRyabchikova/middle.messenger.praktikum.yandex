const isClosedTag = (tag) => (
  tag && tag[1] === '/'
);

export default isClosedTag;
