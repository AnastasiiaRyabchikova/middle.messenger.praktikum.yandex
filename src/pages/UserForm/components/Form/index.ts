import * as Ryabact from 'ryabact';
import validation, { getRequiredMessage } from '~/src/validation';
import { PropsType } from '~/src/types/component';
import isEqual from '~/src/utils/is-equal';
import UIInput from '~/src/components/UIInput';
import Button from '~/src/components/Button';
import AddAvatar from '../AddAvatar';
import PasswordChanging from '../PasswordChanging';
import template from './index.tpl';

const hasErrorsCheck = (errors: { [key: string]: string | null }): boolean => (
  Object.values(errors).filter(Boolean).length > 0
);

type valuesType = { name: string, value: string };

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      params: {
        image: '',
        email: 'test@test.ru',
        login: 'tetya_glasha',
        first_name: 'Глаша',
        second_name: 'Тетя',
        display_name: 'Радость ваша',
        phone: '+79851264245',
      },
      required: {
        image: true,
        email: true,
        login: true,
        first_name: true,
        second_name: true,
        display_name: false,
        phone: true,
      },
      errors: {},
      handleInputBlur: (e: Event) => {
        const { name, value }: valuesType = (<HTMLInputElement>e.target);
        let message: string = '';
        if (value) {
          if (name === 'first_name' || name === 'second_name') {
            message = validation.name(value);
          } else if (name === 'login') {
            message = validation.login(value);
          } else if (name === 'email') {
            message = validation.email(value);
          } else if (name === 'phone') {
            message = validation.phone(value);
          }
        }

        this.setProps({
          errors: {
            ...this?.props?.errors,
            [name]: message,
          },
        });
      },
      handleParamsInput: (e: Event) => {
        const { name, value }: valuesType = (<HTMLInputElement>e.target);
        this.setProps({
          params: {
            ...this?.props?.params,
            [name]: value,
          },
        });
      },
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const {
            required = {},
            params = {},
            errors = {},
          } = this.props;
          const {
            first_name,
            second_name,
            display_name,
            login,
            email,
            phone,
          } = params;

          this.setProps({
            errors: {
              ...errors,
              first_name: getRequiredMessage(required.first_name, first_name)
                || validation.name(first_name),
              second_name: getRequiredMessage(required.second_name, second_name)
                || validation.name(second_name),
              login: getRequiredMessage(required.login, login) || validation.login(login),
              email: getRequiredMessage(required.email, email) || validation.email(email),
              phone: getRequiredMessage(required.phone, phone) || validation.phone(phone),
            },
          });

          if (hasErrorsCheck(errors)) {
            return;
          }

          context.events?.submit({
            first_name,
            second_name,
            display_name,
            login,
            email,
            phone,
          });
        },
      },
    };

    super({
      props,
      name: 'UserFormPageForm',
      template,
      components: {
        UIInput,
        Button,
        AddAvatar,
        PasswordChanging,
      },
      containerTemplate: '<div />',
    });
  }

  componentDidUpdate(oldProps: PropsType, newProps: PropsType): boolean {
    return !isEqual(oldProps.errors, newProps.errors);
  }
};
