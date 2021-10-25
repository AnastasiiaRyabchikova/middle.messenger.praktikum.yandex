const isSelfClosingTag = (string: string): boolean => {
  const regExp = /^<(.*?)\/>$/;
  return regExp.test(string);
};

export default isSelfClosingTag;
