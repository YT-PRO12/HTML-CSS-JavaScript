export class TTLCache {
  constructor() {
    this.store = new Map();
  }

  set(key, value, ttlMs) {
    this.store.set(key, {
      value,
      expiresAt: Date.now() + ttlMs
    });
  }

  get(key) {
    const item = this.store.get(key);

    if (!item) return undefined;

    if (Date.now() >= item.expiresAt) {
      this.store.delete(key);
      return undefined;
    }

    return item.value;
  }

  delete(key) {
    return this.store.delete(key);
  }

  clear() {
    this.store.clear();
  }
}
