const isSelfClosingTag = (string) => {
  const regExp = /^<(.*?)\/>$/;
  return regExp.test(string);
};

export default isSelfClosingTag;
