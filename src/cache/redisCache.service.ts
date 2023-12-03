import { Injectable, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class RedisCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
  ) {}

  async get(key): Promise<string> {
    return await this.cache.get(key);
  }

  async set(key, value) {
    await this.cache.set(key, value);
  }
  async del(key) {
    await this.cache.del(key)
  }
}