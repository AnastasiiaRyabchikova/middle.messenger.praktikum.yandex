import * as chai from 'chai';
import * as chaiDom from 'chai-dom';
import * as chaiSpies from 'chai-spies';
import { render } from 'templator';
import { PropsType } from '@/types/component';
import Component from './index';

const { expect } = chai;

chai
  .use(chaiDom)
  .use(chaiSpies);

describe('Компонент', () => {
  const spyComponentDidUpdate = chai.spy.on(Component.prototype, 'componentDidUpdate');
  const spyComponentInit= chai.spy.on(Component.prototype, 'init');
  const spyComponentDidMount = chai.spy.on(Component.prototype, 'componentDidMount');
  const spyComponentRender = chai.spy.on(Component.prototype, 'componentDidRender');

  class Button extends Component {
    constructor(context: PropsType = {}) {
      const props: PropsType = {
        ...context,
      };

      super({
        props,
        name: 'Button',
        template: '<button type="button" class="button">{{label}}</button>',
        containerTemplate: '<div />',
      });
    }
  };

  const button = new Button({ label: 'Кнопка' });
  const root = document.createElement('div');
  render(root, button.element);

  it('Инициализируется элемент компонента', () => {
    expect(button.element).to.have.html('<button type="button" class="button">Кнопка</button>');
  });

  it('Срабатывает смена пропсов', () => {
    button.setProps({ label: 'Кнопка 2' });
    expect(button.element).to.have.text('Кнопка 2');
    expect(spyComponentDidUpdate).to.have.been.called();
  });

  it('Отоброжение компонента', () => {
    button.show();
    // eslint-disable-next-line no-unused-expressions
    expect(button.element).to.be.displayed;
  });

  it('Скрытие компонента', () => {
    button.hide();
    // eslint-disable-next-line no-unused-expressions
    expect(button.element).not.to.be.displayed;
  });

  it('Методы вызываются в нужной последовательности', () => {
    expect(spyComponentInit).to.have.been.called();
    expect(spyComponentDidMount).to.have.been.called();
    expect(spyComponentRender).to.have.been.called();
  });
});
