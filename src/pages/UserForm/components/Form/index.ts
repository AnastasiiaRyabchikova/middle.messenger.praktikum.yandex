import { WithRouter } from 'router';
import validation, { getRequiredMessage } from '@/validation';
import { UserData } from '@/api/user-interfaces';
import { connect } from '@/store';
import { PropsType } from '@/types/component';
import isEqual from '@/utils/is-equal';
import UIInput from '@/components/UIInput';
import Button from '@/components/Button';
import PasswordChanging from '../PasswordChanging';
import template from './index.tpl';

const hasErrorsCheck = (errors: { [key: string]: string | null }): boolean => (
  Object.values(errors).filter(Boolean).length > 0
);

type valuesType = { name: string, value: string };

class UserFormPageForm extends WithRouter {
  constructor(context: any = {}) {
    /* eslint-disable */
    const props: PropsType & { user: UserData } = {
      ...context,
      params: {
        image: '',
        email: '',
        login: '',
        first_name: '',
        second_name: '',
        display_name: '',
        phone: '',
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

          if (hasErrorsCheck(this.props.errors || {})) {
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
        PasswordChanging,
      },
      containerTemplate: '<div />',
    });
    /* eslint-disable */
  }

  componentDidUpdate(oldProps: PropsType, newProps: PropsType): boolean {
    return !isEqual(oldProps.errors, newProps.errors);
  }

  componentDidMount() {
    const { user } = this.props;
    this.setProps({
      params: {
        image: (user as UserData).avatar,
        email: (user as UserData).email,
        login: (user as UserData).login,
        first_name: (user as UserData).first_name,
        second_name: (user as UserData).second_name,
        display_name: (user as UserData).display_name,
        phone: (user as UserData).phone,
      },
    });
  }
};

export default connect(
  (state) => ({ user: state.user.profile }),
  UserFormPageForm,
);
