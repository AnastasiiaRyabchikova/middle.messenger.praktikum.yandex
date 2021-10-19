import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import Avatar from '~/src/components/Avatar';
import { IconEllipsisVAlt } from '~/src/icons';
import AddUserButton from './AddUserButton';
import RemoveUserButton from './RemoveUserButton';
import AddUserModal from './RemoveUserModal';
import RemoveUserModal from './AddUserModal';
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
      handleRemoveUserButton: () => {
        this.setProps({
          shouldShowRemoveUserModal: true,
        });
      },
      handleAddUserModalClose: () => {
        this.setProps({
          shouldShowAddUserModal: false,
        });
      },
      handleRemoveUserModalClose: () => {
        this.setProps({
          shouldShowRemoveUserModal: false,
        });
      },
      handleAddUserSubmit: (users: number[]) => {
        context.evAddUserSubmit(users);
      },
      handleRemoveUserSubmit: (users: number[]) => {
        context.evRemoveUserSubmit(users);
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
        RemoveUserButton,
        RemoveUserModal,
      },
      containerTemplate: '<div />',
    });
  }
};
