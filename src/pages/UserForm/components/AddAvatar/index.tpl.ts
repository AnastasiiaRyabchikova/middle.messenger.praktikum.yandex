import * as general from '~/src/theme/general.css';

const template: string = `
  <label class="{{class}}">
    <Avatar />
    <input
      type="file"
      class="${general.visuallyHidden}"
      name="avatar"
    />
  </label>
`;

export default template;