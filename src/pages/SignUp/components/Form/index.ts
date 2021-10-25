import * as Ryabact from '~/src/modules/Ryabact';
import { getRequiredMessage } from '~/src/validation';
import isEqual from '~/src/utils/is-equal';
import { PropsType } from '~/src/types/component';
import UIInput from '~/src/components/UIInput';
import Button from '~/src/components/Button';
import template from './index.tpl';

const hasErrorsCheck = (errors: { [key: string]: string | null }): boolean => (
  Object.values(errors).filter(Boolean).length > 0
);

type valuesType = { name: string, value: string };

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      name: context.name,
      errors: {},
      params: {},
      required: {
        login: true,
        password: true,
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
            login,
            password,
          } = params;

          this.setProps({
            errors: {
              ...errors,
              login: getRequiredMessage(required.login, login),
              password: getRequiredMessage(required.password, password),
            },
          });

          if (hasErrorsCheck(this.props.errors || {})) {
            return;
          }

          context.events.submit({
            login,
            password,
          });
        },
      },
    };

    super({
      props,
      name: 'SignUpPageForm',
      template,
      components: {
        UIInput,
        Button,
      },
      containerTemplate: '<div />',
    });
  }

  componentDidUpdate(oldProps: PropsType, newProps: PropsType): boolean {
    return !isEqual(oldProps.errors, newProps.errors);
  }
};
