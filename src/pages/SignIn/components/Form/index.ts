import * as Ryabact from 'ryabact';
import * as validation from '~/src/validation';
import isEqual from '~/src/utils/is-equal';
import { PropsType } from '~/src/types/component';
import UIInput from '~/src/components/UIInput';
import Button from '~/src/components/Button';
import template from './index.tpl';

const requiredMessage = 'Заполните это поле';

const getRequiredMessage = (required, value) => {
  if (required && !value) {
    return requiredMessage;
  }

  return '';
};

export default class Component extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      name: context.name,
      errors: {},
      params: {},
      required: {
        first_name: true,
        second_name: true,
        login: true,
        email: true,
        phone: true,
        password: true,
        password_repeat: true,
      },
      handleInputBlur: (e: Event) => {
        const name: string = (<HTMLInputElement>e.target).name;
        const value: string = (<HTMLInputElement>e.target).value;
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
          } else if (name === 'password') {
            message = validation.password(value);

            if (this.props?.params.password !== this.props?.params.password_repeat) {
              this.setProps({
                errors: {
                  ...(this?.props?.errors || {}),
                  [name]: message,
                  password_repeat: 'Значение должно совпадать с полем ПАРОЛЬ',
                }
              });
              return;
            }
          } else if (name === 'password_repeat') {
            if (this.props?.params.password !== this.props?.params.password_repeat) {
              message = 'Значение должно совпадать с полем ПАРОЛЬ';
            }
          }
        }


        this.setProps({
          errors: {
            ...this?.props?.errors,
            [name]: message,
          }
        });
      },
      handleParamsInput: (e: Event) => {
        const name: string = (<HTMLInputElement>e.target).name;
        const value: string = (<HTMLInputElement>e.target).value;
        this.setProps({
          params: {
            ...(this?.props?.params || {}),
            [name]: value,
          }
        });
      },
      events: {
        submit: (e: Event) => {
          const { required, params } = this.props;
          const {
            first_name,
            second_name,
            login,
            email,
            phone,
            password,
            password_repeat,
          } = params;

          this.setProps({
            errors: {
              ...(this?.props?.errors || {}),
              first_name: getRequiredMessage(required.first_name, first_name) || validation.name(first_name),
              second_name: getRequiredMessage(required.second_name, second_name) || validation.name(second_name),
              login: getRequiredMessage(required.login, login) || validation.login(login),
              email: getRequiredMessage(required.email, email) || validation.email(email),
              phone: getRequiredMessage(required.phone, phone) || validation.phone(phone),
              password: getRequiredMessage(required.password, password) || validation.password(password),
              password_repeat: getRequiredMessage(required.password_repeat, password_repeat),
            }
          });

          e.preventDefault();

          context.events.submit({
            first_name,
            second_name,
            login,
            email,
            phone,
            password,
          });

        },
      }
    };

    super({
      props,
      name: 'SignUpPageForm',
      template,
      components: {
        UIInput,
        Button,
      },
      containerTemplate: `<div />`,
    });
  }

  componentDidUpdate (oldProps, newProps) {
    return !isEqual(oldProps.errors, newProps.errors);
  }
};

