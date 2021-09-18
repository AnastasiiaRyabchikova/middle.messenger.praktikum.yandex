import Templator from 'templator';
import {
  compiledComponentType,
  ComponentSettingsInterface,
  interfaceRyabactComponent,
  ComponentsType,
  PropsType,
} from '../../types/component';
import EventBus from '../event-bus';

export default class Component implements interfaceRyabactComponent {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _name: string = '';

  _element: compiledComponentType = document.createElement('div');

  _template: string = '';

  _components: ComponentsType;

  _containerTemplate: string;

  props: PropsType;

  eventBus: () => EventBus;

  constructor({
    props = {},
    name,
    template,
    components = {},
    containerTemplate,
  } : ComponentSettingsInterface) {
    this._name = name;
    this._template = template;
    this._components = components;
    this._containerTemplate = containerTemplate;
    const eventBus = new EventBus();

    this.eventBus = () => eventBus;

    this.props = this._makePropsProxy(props);

    this._registerEvents(eventBus);
    eventBus.emit(Component.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus): void {
    eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources(): void {
    const component = {
      name: `${this._name} container`,
      template: this._containerTemplate,
    };
    this._element = new Templator(component).compile();
  }

  _addEvents(): void {
    const { events } = this.props;
    if (this.element?.firstChild) {
      const current: compiledComponentType = this.element?.firstChild;

      if (events) {
        Object.keys(events).forEach((eventName) => {
          if (typeof events[eventName] === 'function') {
            current.addEventListener(eventName, events[eventName]);
          }
        });
      }
    }
  }

  _removeEvents(): void {
    const { events } = this.props;
    const current = this.element?.firstChild;

    if (events && current) {
      Object.keys(events).forEach((eventName) => {
        current.removeEventListener(eventName, events[eventName]);
      });
    }
  }

  init(): void {
    this._createResources();
    this.eventBus().emit(Component.EVENTS.FLOW_CDM);
  }

  _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidMount(oldProps: PropsType = {}): void { /**/ }

  _componentDidUpdate(oldProps: PropsType = {}, newProps: PropsType = {}): void {
    //
    if (this.componentDidUpdate(oldProps, newProps)) {
      this._removeEvents();
      this._render();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(oldProps: PropsType = {}, newProps: PropsType = {}): boolean { return true; }

  setProps = (nextProps: PropsType = {}): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): compiledComponentType {
    return this._element;
  }

  _render(): void {
    const block: compiledComponentType = this.render();

    if (this._element && block) {
      this._clearElement();
      this._element.appendChild(block);
    }

    this._addEvents();
  }

  _clearElement(): void {
    if (this._element) {
      this._element.textContent = '';
    }
  }

  render(): compiledComponentType {
    const component = {
      name: this._name,
      template: this._template,
      components: this._components,
    };
    return new Templator(component).compile(this.props);
  }

  _makePropsProxy(props: PropsType): PropsType {
    const eventBus = this.eventBus();

    return new Proxy(props, {
      set(target: PropsType, prop: string, value: unknown) {
        const oldTarget = { ...target };
        // eslint-disable-next-line no-param-reassign
        target[prop] = value;
        eventBus.emit(Component.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
    });
  }

  show(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this._element.style.display = 'block';
  }

  hide(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this._element.style.display = 'none';
  }
}
