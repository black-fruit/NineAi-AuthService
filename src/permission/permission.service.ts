// permission.service.ts
import { Injectable } from '@nestjs/common';
import { PermissionDto } from './permission.dto';

@Injectable()
export class PermissionService {
  private readonly correctIp = '127.0.0.1';
  private readonly correctKey = 'aaaaaa';

  private readonly json = {
    data: {
      message: "授权成功！",
      success: true
    },
    code: 200,
    success: true,
    message: "请求成功"
  };

  private readonly failed = {
    "data": {
        "message": "无效的授权码,请联系vx: BlackFruitHouse 或 qq: 2985135807 购买正版授权码！",
        "success": false
    },
    "code": 200,
    "success": true,
    "message": "请求成功"
}

  async checkPermission(permissionDto: PermissionDto) {
    // 比较传递的ip和key是否与正确的值相匹配
    const isIpValid = permissionDto.ip === this.correctIp;
    const isKeyValid = permissionDto.key === this.correctKey;
    
    if (isIpValid && isKeyValid) {
      return this.json;
    } else {
      return this.failed;
    }
  }
}
