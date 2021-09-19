export default function nameValidation(string: string): string {
  if (string.length < 3 || string.length > 20) {
    return 'Значение должно быть длиной от 3 до 20 символов';
  }

  if (/^\d*$/i.test(string)) {
    return 'Значение не должно состоять из цифр';
  }

  if (!/^[0-9a-z_-]*$/i.test(string)) {
    return 'Значение должно состоять из букв латинсткого алфавита, цифр без пробелов, спецсимволов (допустимы дефис и нижнее подчёркивание)';
  }

  return '';
};
