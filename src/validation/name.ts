export default function nameValidation(string: string): string {
  const firstLetter = string[0];
  if (firstLetter.toUpperCase() !==  firstLetter) {
    return 'Значение должно начинаться с заглавной буквы';
  }
  if (!/^[A-ZА-Я][A-Za-zА-Яа-я-]*$/i.test(string)) {
    return 'Значение может содержать буквы латинского или русского алфавитов и дефис';
  }
  
  return '';
};
