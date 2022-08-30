import type { Cache } from "./cache";

class Fetcher<V> {
  private cache: Cache<string, V>;
  private url: string;
  constructor(url: string, cache: Cache<string, V>) {
    this.url = url;
    this.cache = cache;
  }

  public async get(number: number, name: string): Promise<V> {
    if (this.cache.has(name + number)) {
      return await this.cache.get(name + number);
    }
    const response = await fetch(this.url);
    return await response.json();
  }
}

export default Fetcher;
