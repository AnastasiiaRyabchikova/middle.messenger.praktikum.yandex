export default function passwordRepeatValidation(first: string, second: string): string {
  return first !== second ? 'Значение должны совпадать' : '';
};
