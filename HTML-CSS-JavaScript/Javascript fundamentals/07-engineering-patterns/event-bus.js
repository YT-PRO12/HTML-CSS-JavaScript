export class EventBus {
  #events = new Map();

  on(event, handler) {
    if (!this.#events.has(event)) {
      this.#events.set(event, new Set());
    }

    this.#events.get(event).add(handler);

    return () => this.off(event, handler);
  }

  off(event, handler) {
    this.#events.get(event)?.delete(handler);
  }

  emit(event, payload) {
    this.#events.get(event)?.forEach(handler => handler(payload));
  }
}

// Example:
// const bus = new EventBus();
// const unsubscribe = bus.on("user.created", user => console.log(user));
// bus.emit("user.created", { id: 1 });
