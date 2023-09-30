// permission.module.ts
import { Module } from '@nestjs/common';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';
import { PermissionGuard } from './permission.guard';

@Module({
  controllers: [PermissionController],
  providers: [PermissionService, PermissionGuard],
})
export class PermissionModule {}
