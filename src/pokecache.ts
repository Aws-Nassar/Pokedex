export type CacheEntry<T> = {
    createdAt: number,
    val: T,
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor (interval: number)  {
    this.#interval = interval;
    this.#startReapLoop()
  }

  get<T>(key: string) {
    return this.#cache.get(key)?.val;
  }

  add<T> (key: string, val: T) {
    this.#cache.set(key,{createdAt: Date.now(),val: val});
  }

  #reap() {
    const now = Date.now();
    for (const [key, entry] of this.#cache) {
      if (now - entry.createdAt >= this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
  }

  stopReapLoop() {
    if (this.#reapIntervalId) {
      clearInterval(this.#reapIntervalId);
      this.#reapIntervalId = undefined;
    }
  }
}
