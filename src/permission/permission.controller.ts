// permission.controller.ts
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionDto } from './permission.dto';
import { PermissionGuard } from './permission.guard';

@Controller('api/permission/auth')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  @UseGuards(PermissionGuard)
  async checkPermission(@Body() permissionDto: PermissionDto) {
    return this.permissionService.checkPermission(permissionDto);
  }
}
