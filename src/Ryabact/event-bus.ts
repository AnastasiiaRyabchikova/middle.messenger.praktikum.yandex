export default class EventBus {
  listeners: {
    [key: string]: Function[],
  };
  constructor() {
    this.listeners = {};
  }

  on(eventName: string, callback: Function): void {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  emit(eventName: string): void {
    this.listeners[eventName].forEach(listener => {
      listener();
    });
  }

  detach(eventName: string, callback: Function): void {
    const listeners = this.listeners[eventName]
      .filter((listener: Function) => listener === callback);

    this.listeners[eventName] = listeners;
    if (!listeners.length) {
      delete this.listeners[eventName];
    }
  }
};
