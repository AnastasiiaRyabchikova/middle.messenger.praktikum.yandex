const requiredMessage = 'Заполните это поле';

export default function getRequiredMessage(required: boolean, value: string): string {
  if (required && !value) {
    return requiredMessage;
  }

  return '';
};
