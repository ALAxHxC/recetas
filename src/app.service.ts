import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheService: Cache
  ) { }
  getHello(): string {
    return 'Hello World!';
  }

  async getCache(id: string): Promise<any> {
    console.log('storageCache', String(id))
    const cachedData = await this.cacheService.get(String(id));
    console.log('data set to cache', cachedData);
    if (!cachedData) {
      throw new NotFoundException('No data found in cache');
    }
    return await cachedData;
  }
  async storageCache(id: string): Promise<any> {
    console.log('storageCache', String(id))
    const cache = {
      id: id,
      value: new Date().getTime(),
    };

    await this.cacheService.set(String(id), cache, 30000);
    const cachedData = await this.cacheService.get(String(id));
    console.log('data set to cache', cachedData);

    return await cachedData;
  }

}
