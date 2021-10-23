import * as chai from 'chai';
import * as chaiDom from 'chai-dom';
import Templator from './index';

const { expect } = chai;

chai
  .use(chaiDom);

const Button = new Templator({
  template: '<div><button type="button"><span>{{label}}</span></button></div>',
  name: 'TestButton',
});

describe('Шаблонизатор Templator', () => {
  it('Компилирование шаблона без компонентов', () => {
    const button = Button.compile({ label: 'Кнопка' });
    expect(button).to.have.html('<button type="button"><span>Кнопка</span></button>');
  });
});
