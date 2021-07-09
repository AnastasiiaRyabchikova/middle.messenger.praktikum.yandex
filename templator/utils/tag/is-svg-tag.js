const isSvgTag = (tag) => {
  return [
    'svg',
    'path'
  ].includes(tag);
};

export default isSvgTag;