import * as Ryabact from 'ryabact';
import { PropsType } from '@/types/component';
import isEqual from '@/utils/is-equal';
import { getRequiredMessage } from '@/validation';
import UIInput from '@/components/UIInput';
import Button from '@/components/Button';
import template from './index.tpl';

const hasErrorsCheck = (errors: { [key: string]: string | null }): boolean => (
  Object.values(errors).filter(Boolean).length > 0
);

type valuesType = { name: string, value: string };

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      errors: {},
      params: {},
      required: {
        ids: true,
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
            ids,
          } = params;

          this.setProps({
            errors: {
              ...this.props.errors,
              ids: getRequiredMessage(required.ids, ids),
            },
          });

          if (hasErrorsCheck(this.props.errors || {})) {
            return;
          }

          const users = ids
            .split(',')
            .map(Number);

          // eslint-disable-next-line
          (context.events as any)?.submit(users);
        },
      },
    };

    super({
      props,
      name: 'CreateNewChatModalForm',
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
