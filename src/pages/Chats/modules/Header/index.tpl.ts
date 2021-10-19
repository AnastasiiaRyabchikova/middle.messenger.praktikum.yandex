import * as general from '~/src/theme/general.css';

import * as styles from './styles.module.css';

const template: string = `
<div
  class="${styles.header}"
>
  <Avatar />
  <div
    class="${styles.name}"
  >
    Александр
  </div>
  <div class="${styles.addUser}">
    <AddUserButton
      onClick="{{handleAddUserButton}}"
    />
  </div>
  <div class="${styles.removeUser}">
    <RemoveUserButton
      onClick="{{handleRemoveUserButton}}"
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
