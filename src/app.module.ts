// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermissionModule } from './permission/permission.module';

@Module({
  imports: [PermissionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
