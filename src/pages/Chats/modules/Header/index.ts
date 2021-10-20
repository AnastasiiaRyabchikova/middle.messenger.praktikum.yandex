import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import Avatar from '~/src/components/Avatar';
import { IconEllipsisVAlt } from '~/src/icons';
import AddUserButton from './AddUserButton';
import RemoveUserButton from './RemoveUserButton';
import AddUserModal from './AddUserModal';
import RemoveUserModal from './RemoveUserModal';
import template from './index.tpl';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      title: context.title,
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
