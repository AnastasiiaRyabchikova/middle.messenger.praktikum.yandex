const isTag = (string: string): boolean => {
  const regExp = /^<(.*?)>$/;
  return regExp.test(string);
};

export default isTag;
