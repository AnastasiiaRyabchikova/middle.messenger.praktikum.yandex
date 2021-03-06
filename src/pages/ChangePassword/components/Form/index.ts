import * as Ryabact from 'ryabact';
import { PropsType } from '@/types/component';
import validation, { getRequiredMessage } from '@/validation';
import { EditPasswordData } from '@/api/user-interfaces';
import isEqual from '@/utils/is-equal';
import UIInput from '@/components/UIInput';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import template from './index.tpl';

const hasErrorsCheck = (errors: { [key: string]: unknown }): boolean => (
  Object.values(errors).filter(Boolean).length > 0
);

type valuesType = { name: string, value: string };

type FormEditPasswordData = EditPasswordData & { newPasswordRepeat: string }

export default class Page extends Ryabact.Component {
  constructor(context: any = {}) {
    /* eslint-disable */
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
            message = validation.passwordRepeat(
              (params as FormEditPasswordData).newPassword,
              (params as FormEditPasswordData).newPasswordRepeat,
            );
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

          if (hasErrorsCheck(this.props.errors || {})) {
            return;
          }

          context.events?.submit({
            oldPassword,
            newPassword,
          });
        },
      },
      /* eslint-disable */
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
