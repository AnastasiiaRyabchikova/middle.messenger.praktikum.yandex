const isClosedTag = (tag) => {
  return tag && tag[1] === '/';
};

export default isClosedTag;