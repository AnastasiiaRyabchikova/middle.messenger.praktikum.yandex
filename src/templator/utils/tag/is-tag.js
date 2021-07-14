const isTag = (string) => {
  const regExp = /^<(.*?)>$/;
  return regExp.test(string);
};

export default isTag;
