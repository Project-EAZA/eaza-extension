import { LRUCache as CacheInner } from "typescript-lru-cache";

export interface Cache<K, V> {
  get(key: K): V;
  set(ket: K, value: V): void;
  has(key: K): boolean;
}

export class LRUCache<K, V> implements Cache<K, V> {
  private inner: CacheInner<K, V>;
  constructor(maxSize: number) {
    this.inner = new CacheInner<K, V>({
      maxSize: maxSize,
    });
  }

  get(key: K): V {
    return this.inner.get(key);
  }
  set(key: K, value: V): void {
    this.inner.set(key, value);
  }
  has(key: K): boolean {
    return this.inner.has(key);
  }
}
