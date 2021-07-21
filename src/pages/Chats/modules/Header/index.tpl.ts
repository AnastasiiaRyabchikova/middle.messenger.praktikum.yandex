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
  <button
    type="button"
    class="${general.buttonReset} ${styles.search}"
  >
    Поиск
  </button>
  <button
    class="${general.buttonReset}"
  >
    <IconEllipsisVAlt />
  </button>
</div>
`;

export default template;
