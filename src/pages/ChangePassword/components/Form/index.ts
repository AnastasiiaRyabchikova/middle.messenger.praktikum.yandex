import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import * as validation from '~/src/validation';
import isEqual from '~/src/utils/is-equal';
import UIInput from '~/src/components/UIInput';
import Button from '~/src/components/Button';
import Avatar from '~/src/components/Avatar';
import template from './index.tpl';
import * as styles from './styles.module.css';


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

export default class Page extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      name: context.name,
      params: {
        old_password: '',
        new_password: '',
        new_password_repeat: '',
      },
      required: {
        old_password: true,
        new_password: true,
        new_password_repeat: false,
      },
      errors: {},
      handleInputBlur: (e: Event) => {
        const name: string = (<HTMLInputElement>e.target).name;
        const value: string = (<HTMLInputElement>e.target).value;
        const { params } = this.props;
        let message: string = '';
        if (value) {
          if (name === 'new_password') {
            message = validation.password(value);
          } else if (name === 'new_password_repeat') {
            message = validation.passwordRepeat(params.new_password, params.new_password_repeat);
            this.setProps({
              errors: {
                new_password: message,
                [name]: message,
              }
            });
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
            ...this?.props?.params,
            [name]: value,
          }
        });
      },
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const { required, params } = this.props;
          const {
            old_password,
            new_password,
            new_password_repeat,
          } = params;

          this.setProps({
            errors: {
              ...this.props.errors,
              old_password: getRequiredMessage(required.old_password, old_password),
              new_password: getRequiredMessage(required.new_password, new_password) || validation.password(new_password),
              new_password_repeat: getRequiredMessage(required.new_password_repeat, new_password_repeat)
                || validation.passwordRepeat(new_password, new_password_repeat)
            }
          });


          if (hasErrorsCheck(this.props.errors)) {
            return;
          }

          context.events?.submit({
            old_password,
            new_password,
          });

        },
      }
    };

    super({
      props,
      name: 'ChangePasswordPageForm',
      template,
      components: {
        UIInput,
        Button,
        Avatar,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }

  componentDidUpdate (oldProps, newProps) {
    return !isEqual(oldProps.errors, newProps.errors);
  }
};
