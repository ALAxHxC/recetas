import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { RedisCacheModule } from './cache/redisCache.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheInterceptor } from '@nestjs/cache-manager';


@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
     // store: redisStore,
      //store: redisStore,
      host: '127.0.0.1',
      port: 6379,
      no_ready_check: true,
      ttl: 60*60*24*30, // A DAY 
      
    })
  ],
  controllers: [AppController],
  providers: [AppService,
  {
    provide: APP_INTERCEPTOR,
    useClass: CacheInterceptor,
  }],
})
export class AppModule {}
