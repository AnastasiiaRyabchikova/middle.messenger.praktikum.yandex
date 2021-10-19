import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import Avatar from '~/src/components/Avatar';
import { IconEllipsisVAlt } from '~/src/icons';
import AddUserButton from './AddUserButton';
import AddUserModal from './AddUserModal';
import template from './index.tpl';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      handleAddUserButton: () => {
        this.setProps({
          shouldShowAddUserModal: true,
        });
      },
      handleAddUserModalClose: () => {
        this.setProps({
          shouldShowAddUserModal: false,
        });
      },
      handleAddUserSubmit: (users: number[]) => {
        context.evAddUserSubmit(users);
      },
    };

    super({
      props,
      name: 'ChatPageHeaderModule',
      template,
      components: {
        Avatar,
        IconEllipsisVAlt,
        AddUserButton,
        AddUserModal,
      },
      containerTemplate: '<div />',
    });
  }
};
