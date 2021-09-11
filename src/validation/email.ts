export default function nameValidation(string: string): string {
  return !/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/i.test(string)
    ? 'Почта должна содержать знак @ и точку и буквы латинского алфавита'
    : '';
};
