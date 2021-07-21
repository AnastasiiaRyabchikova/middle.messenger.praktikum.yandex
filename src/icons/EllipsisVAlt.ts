import Templator from 'templator';

const template = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 192 512"
  height="1em"
>
  <path d="M96 152c39.8 0 72-32.2 72-72S135.8 8 96 8 24 40.2 24 80s32.2 72 72 72zm0-112c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 144c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm0 112c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm0 64c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm0 112c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" />
</svg>`;

const component = {
  name: 'IconEllipsisVAlt',
  template,
};

const Icon = (props) => {
  const context = {
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Icon;