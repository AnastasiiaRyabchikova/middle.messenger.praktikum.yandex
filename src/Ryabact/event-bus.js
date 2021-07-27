class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(eventName, callback) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  emit(eventName) {
    this.listeners[eventName].forEach(listener => {
      listener();
    });
  }

  detach(eventName, callback) {
    const listeners = this.listeners[eventName]
    .filter((listener) === callback);
    this.listeners[eventName] = listeners;
    if (!listeners.length) {
      delete this.listeners[eventName];
    }
  }
};
