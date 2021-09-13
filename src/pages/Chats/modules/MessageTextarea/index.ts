import * as Ryabact from 'ryabact';
import { getRequiredMessage } from '~/src/validation';
import isEqual from '~/src/utils/is-equal';
import UITextarea from '~/src/components/UITextarea';
import { PropsType } from '~/src/types/component';
import { IconArrow } from '~/src/icons';
import template from './index.tpl';

const hasErrorsCheck = (errors: { [key: string]: string | null }): boolean => (
  Object.values(errors).filter(Boolean).length > 0
);

type valuesType = { name: string, value: string };

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
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
          const { required, params } = this.props;
          const {
            text,
          } = params;

          this.setProps({
            errors: {
              ...this.props.errors,
              text: getRequiredMessage(required.text, text),
            },
          });

          if (hasErrorsCheck(this.props.errors)) {
            return;
          }

          context.events?.submit({
            text,
          });
        },
      },
    };

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

  componentDidUpdate(oldProps, newProps) {
    return !isEqual(oldProps.errors, newProps.errors);
  }
};
