import type { Cache } from './cache';
import type { APIResponse } from './models';

export interface Fetcher<V> {
  get(params: URLSearchParams): Promise<V>;
}

export class CachedFetcher<V> implements Fetcher<V> {
  private cache: Cache<URLSearchParams, V>;
  private url: string;
  constructor(url: string, cache: Cache<URLSearchParams, V>) {
    this.url = url;
    this.cache = cache;
  }

  public async get(params: URLSearchParams): Promise<V> {
    if (this.cache.has(params)) {
      return this.cache.get(params);
    }

    const response = await fetch(this.url + '?' + params, {
      method: 'GET',
    });

    const json: APIResponse<V> = await response.json();
    this.cache.set(params, json.data);
    return json.data;
  }
}
