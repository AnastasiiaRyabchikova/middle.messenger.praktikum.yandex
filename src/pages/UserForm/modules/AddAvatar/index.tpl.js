import styles from './styles.module.css';

const template = `
  <label class="{{class}}">
    <Avatar />
    <input
      type="file"
      class="visually-hidden"
      name="avatar"
    />
  </label>
`;

export default template;