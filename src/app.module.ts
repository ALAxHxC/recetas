import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
//import redisStore from 'cache-manager-redis-store';
import * as redisStore from 'cache-manager-redis-store';
import { RedisCacheModule } from './cache/redisCache.module';

@Module({
  imports: [RedisCacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
