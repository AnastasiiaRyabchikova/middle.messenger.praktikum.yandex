import * as general from '@/theme/general.css';

import styles from './styles.module.css';

const template: string = `
<div
  class="${styles.header}"
>
  <Avatar />
  <div
    class="${styles.name}"
  >
    {{title}}
  </div>
  <div class="${styles.removeUser}">
    <RemoveUserButton
      onClick="{{handleRemoveUserButton}}"
    />
  </div>
  <div class="${styles.addUser}">
    <AddUserButton
      onClick="{{handleAddUserButton}}"
    />
  </div>
  <button
    class="${general.buttonReset}"
  >
    <IconEllipsisVAlt />
  </button>
  <t-if={{shouldShowAddUserModal}}>
    <AddUserModal
      evClose="{{handleAddUserModalClose}}"
      evSubmit="{{handleAddUserSubmit}}"
    />
  </t-if>
  <t-if={{shouldShowRemoveUserModal}}>
    <RemoveUserModal
      evClose="{{handleRemoveUserModalClose}}"
      evSubmit="{{handleRemoveUserSubmit}}"
    />
  </t-if>
</div>
`;

export default template;
