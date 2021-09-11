import * as Ryabact from 'ryabact';
import isEqual from '~/src/utils/is-equal';
import { PropsType } from '~/src/types/component';
import UIInput from '~/src/components/UIInput';
import Button from '~/src/components/Button';
import template from './index.tpl';


const requiredMessage = 'Заполните это поле';

const hasErrorsCheck = (errors: { [key: string]: string | null }): boolean => {
  return Object.values(errors).filter(Boolean).length > 0;
};

const getRequiredMessage = (required: boolean, value: string): string => {
  if (required && !value) {
    return requiredMessage;
  }

  return '';
};

export default class Component extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const props: PropsType = {
      name: context.name,
      errors: {},
      params: {},
      required: {
        login: true,
        password: true,
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
          e.preventDefault();
          const { required, params } = this.props;
          const {
            login,
            password,
          } = params;

          this.setProps({
            errors: {
              ...this?.props?.errors,
              login: getRequiredMessage(required.login, login),
              password: getRequiredMessage(required.password, password),
            }
          });


          if (hasErrorsCheck(this.props.errors)) {
            return;
          }

          context.events?.submit({
            login,
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

