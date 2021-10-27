import * as general from '@/theme/general.css';

const template: string = `
  <form>
    <label class="{{class}}">
      <Avatar />
      <Input
        type="file"
        class="${general.visuallyHidden}"
        name="avatar"
        onChange="{{handleFileInputChange}}"
      />
    </label>
  </form>
`;

export default template;
