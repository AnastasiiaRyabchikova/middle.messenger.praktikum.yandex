import * as general from '@/theme/general.css';

const template = `
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