import * as Ryabact from '~/src/modules/Ryabact';
import { PropsType } from '~/src/types/component';
import validation, { getRequiredMessage } from '~/src/validation';
import isEqual from '~/src/utils/is-equal';
import UIInput from '~/src/components/UIInput';
import Button from '~/src/components/Button';
import Avatar from '~/src/components/Avatar';
import template from './index.tpl';

const hasErrorsCheck = (errors: { [key: string]: string | null }): boolean => (
  Object.values(errors).filter(Boolean).length > 0
);

type valuesType = { name: string, value: string };

export default class Page extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      name: context.name,
      params: {
        oldPassword: '',
        newPassword: '',
        newPassword_repeat: '',
      },
      required: {
        oldPassword: true,
        newPassword: true,
        newPasswordRepeat: false,
      },
      errors: {},
      handleInputBlur: (e: Event) => {
        const { name, value }: valuesType = (<HTMLInputElement>e.target);
        const { params } = this.props;
        let message: string = '';
        if (value) {
          if (name === 'newPassword') {
            message = validation.password(value);
          } else if (name === 'newPasswordRepeat') {
            message = validation.passwordRepeat(params.newPassword, params.newPasswordRepeat);
            this.setProps({
              errors: {
                newPassword: message,
                [name]: message,
              },
            });
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
          const { required = {}, params = {} } = this.props;
          const {
            oldPassword,
            newPassword,
            newPasswordRepeat,
          } = params;

          this.setProps({
            errors: {
              ...this.props.errors,
              oldPassword: getRequiredMessage(required.oldPassword, oldPassword),
              newPassword: getRequiredMessage(required.newPassword, newPassword)
                || validation.password(newPassword),
              newPasswordRepeat: getRequiredMessage(
                required.newPasswordRepeat,
                newPasswordRepeat,
              )
                || validation.passwordRepeat(newPassword, newPasswordRepeat),
            },
          });

          if (hasErrorsCheck(this.props.errors)) {
            return;
          }

          context.events?.submit({
            oldPassword,
            newPassword,
          });
        },
      },
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
      containerTemplate: '<div />',
    });
  }

  componentDidUpdate(oldProps: PropsType, newProps: PropsType): boolean {
    return !isEqual(oldProps.errors, newProps.errors);
  }
};
