import Templator from '~/templator';

const template = `
<div>
  <t-if={{src}}>
    <img
      src="{{src}}"
    />
  <t-else-if={{initials}}>
    <div>
      {{initials}}
    </div>
  <t-else>
    <div>
      ДЛ
    </div>
  </t-if>
</div>
`;

const component = {
  name: 'ChatCompanionAvatar',
  template,
};

const Avatar = (props) => {
  const context = {
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Avatar;
