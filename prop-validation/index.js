import isString from './isString';

const typeCalculation = (value) => {
  if (isString(value)) {
    return 'string',
  }

  return;
};

const propValidation = ({
  type,
  isRequired,
  default,
}) => (value) => {
  if (typeCalculation(value) !== type)  {
    throw new Error();
  }
};

export default {
  isString,
};
