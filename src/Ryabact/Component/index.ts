import { compiledComponentType, ComponentSettingsInterface } from '~/src/types/component';
import EventBus from '../event-bus';

export default class Component {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render"
  };

  _name: string = '';
  _element: compiledComponentType = null;
  _meta: {
    [key: string]: any,
    tagName: string,
  } | null = null;
  props: object;
  eventBus: Function;

  constructor({ props = {}, name } : ComponentSettingsInterface) {
    this._name = name;
    const eventBus = new EventBus();

    this._meta = {
      tagName: 'div',
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Component.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    if (!this._meta) {
      return;
    }
    const { tagName } = this._meta;
    if (this._element) {
      this._element = this._createDocumentElement(tagName);
    }
  }

  init() {
    this._createResources();
    this.eventBus().emit(Component.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
  }

  componentDidMount(oldProps: object = {}) {}

  _componentDidUpdate(oldProps: object = {}, newProps: object = {}) {
    //
  }

  componentDidUpdate(oldProps: object = {}, newProps: object = {}) {
    return true;
  }

  setProps = (nextProps: object = {}) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): compiledComponentType {
    return this._element;
  }

  _render() {
    const block: compiledComponentType = this.render();
    // Это небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно компилировать не в строку (или делать это правильно),
    // либо сразу превращать в DOM-элементы и возвращать из compile DOM-ноду
    if (this._element && block) {
      this._element.appendChild(block);
    }
  }

    // Переопределяется пользователем. Необходимо вернуть разметку
  render(): compiledComponentType {
    return document.createElement('div');
  }

  getContent(): compiledComponentType {
    return this.element;
  }

  _makePropsProxy(props: object): object {
    // Здесь вам предстоит реализовать метод
    return new Proxy(props, {
      get(target: object, prop: string) {
        const value: any = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target: object, prop: string, value: any) {
        target[prop] = value;
        return true;
      },
    });
    return props;
  }

  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    const content = this.getContent();
    if (content) {
      content.style.display = "block";
    }
  }

  hide() {
    const content = this.getContent();
    if (content) {
      content.style.display = "none";
    }
  }
}
