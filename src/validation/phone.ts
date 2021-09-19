export default function nameValidation(string: string): string {
  if (string.length < 10 || string.length > 15) {
    return 'Значение должно быть длиной от 10 до 15 символов';
  }

  if (!/^\+{0,1}[0-9]*$/i.test(string)) {
    return 'Значение должно состоять из цифр и может начинаться с цифр';
  }

  return '';
};
