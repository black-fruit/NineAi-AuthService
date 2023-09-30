// permission.dto.ts
import { IsString, IsIP } from 'class-validator';

export class PermissionDto {
  @IsString()
  key: string;

  @IsIP()
  ip: string;
}
