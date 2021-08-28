import Templator from 'templator';
import { compiledComponentType, ComponentSettingsInterface } from '~/src/types/component';

import EventBus from '../event-bus';

export default class Component {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  _name: string = '';
  _element: compiledComponentType = null;
  _template: string = '';
  _meta: {
    [key: string]: any,
    tagName: string,
  } | null = null;
  props: object;
  eventBus: Function;

  constructor({ props = {}, name, template } : ComponentSettingsInterface) {
    this._name = name;
    this._template = template;
    const eventBus = new EventBus();

    this._meta = {
      tagName: 'div',
      props,
    };
    
    this.eventBus = () => eventBus;

    this.props = this._makePropsProxy(props);

    this._registerEvents(eventBus);
    eventBus.emit(Component.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    if (!this._meta) {
      return;
    }
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
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
    if (this.componentDidUpdate(oldProps, newProps)) {
      this._render();
    }
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

    if (this._element && block) {
      this._clearElement();
      this._element.appendChild(block);
    }
  }

  _clearElement() {
    if (!this._element) {
      return null;
    }
    this._element.textContent = '';
  }

    // Переопределяется пользователем. Необходимо вернуть разметку
  render(): compiledComponentType {
    const component = {
      name: this._name,
      template: this._template,
    }
    return new Templator(component).compile(this.props);
  }

  getContent(): compiledComponentType {
    return this.element;
  }

  _makePropsProxy(props: object): object {
    // Здесь вам предстоит реализовать метод
    const eventBus = this.eventBus();
    return new Proxy(props, {
      get(target: object, prop: string) {
        const value: any = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target: object, prop: string, value: any) {
        const oldTarget = { ...target };
        target[prop] = value;
        eventBus.emit(Component.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
    });
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
