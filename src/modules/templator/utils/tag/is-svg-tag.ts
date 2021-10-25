const isSvgTag = (tag: string): boolean => ([
  'svg',
  'path',
].includes(tag));

export default isSvgTag;
