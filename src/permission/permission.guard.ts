// permission.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class PermissionGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // 获取请求对象
    const request = context.switchToHttp().getRequest();
    // 获取请求方法和路径
    const method = request.method;
    const path = request.path;
    // 如果不是POST方法或不是/api/permission/auth路径，直接放行
    if (method !== 'POST' || path !== '/api/permission/auth') {
      return true;
    }
    // 如果是POST方法且是/api/permission/auth路径，检查请求体中是否有ip和key字段
    const body = request.body;
    if (body && body.ip && body.key) {
      return true;
    }
    // 否则拒绝访问
    return false;
  }
}
