import type { Cache } from "./cache";
import type { APIResponse } from "./models";

export interface Fetcher<V> {
  post(params: URLSearchParams): Promise<V>;
}

export class CachedFetcher<V> implements Fetcher<V> {
  private cache: Cache<String, V>;
  private url: string;
  constructor(url: string, cache: Cache<String, V>) {
    this.url = url;
    this.cache = cache;
  }

  public async get(params: URLSearchParams): Promise<V> {
    const key = params.toString();
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    const response = await fetch(this.url + "?" + params, {
      method: "GET",
    });

    const json: APIResponse<V> = await response.json();
    if (!json.success) {
      throw "Not Found";
    }

    this.cache.set(key, json.data);
    return json.data;
  }

  public async post(params: URLSearchParams): Promise<V> {
    const key = params.toString();

    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    const response = await fetch(this.url, {
      method: "POST",
      body: params,
    });

    const json: APIResponse<V> = await response.json();
    if (!json.success) {
      throw "Not Found";
    }

    this.cache.set(key, json.data);
    return json.data;
  }
}
