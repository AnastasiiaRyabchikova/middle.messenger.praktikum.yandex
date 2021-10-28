import * as Ryabact from 'ryabact';
import { getRequiredMessage } from '@/validation';
import isEqual from '@/utils/is-equal';
import UITextarea from '@/components/UITextarea';
import { PropsType } from '@/types/component';
import { IconArrow } from '@/icons';
import template from './index.tpl';

const hasErrorsCheck = (errors: { [key: string]: string | null }): boolean => (
  Object.values(errors).filter(Boolean).length > 0
);

type valuesType = { name: string, value: string };

export default class Component extends Ryabact.Component {
  constructor(context: any = {}) {
    /* eslint-disable */
    const props: PropsType = {
      ...context,
      name: context.name,
      errors: {},
      params: {},
      required: {
        text: true,
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
          } = this.props;
          const {
            text,
          } = params;

          this.setProps({
            errors: {
              ...this.props.errors,
              text: getRequiredMessage(required.text, text),
            },
          });

          if (hasErrorsCheck(this.props.errors || {})) {
            return;
          }

          context.events.submit({ text });
        },
      },
    };
    /* eslint-disable */

    super({
      props,
      name: 'MessageTextarea',
      template,
      components: {
        IconArrow,
        UITextarea,
      },
      containerTemplate: '<div />',
    });
  }

  componentDidUpdate(oldProps: PropsType, newProps: PropsType): boolean {
    return !isEqual(oldProps.errors, newProps.errors);
  }
};
