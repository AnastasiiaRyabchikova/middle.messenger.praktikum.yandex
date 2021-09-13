export default function nameValidation(string: string): string {
  if (string.length < 8 || string.length > 40) {
    return 'Значение должно быть длиной от 8 до 40 символов';
  }

  if (string.toLowerCase() === string) {
    return 'Значение должно содержать хотя бы одну заглавную букву';
  }

  if (!/[0-9]/.test(string)) {
    return 'Значение должно содержать хотя бы одну цифру';
  }

  return '';
};
