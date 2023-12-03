import { Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { AppService } from './app.service';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:id')
  getCache(@Param('id') id): any {
    console.log('getCache', id)
    return this.appService.getCache(id);
  }


  @Post('/:id')
  storageCache(@Param('id') id): any {
    return this.appService.storageCache(id);
  }

  
}

