/* eslint-disable prettier/prettier */
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { UserRole } from '../enums/user-role.enum';

@Injectable()
export class RoleValidationPipe implements PipeTransform {

  private validRoles = Object.values(UserRole);

  transform(value: any, metadata: ArgumentMetadata) {

    const role = value.role;

    
    if (!role) {
      throw new BadRequestException({
        success: false,
        message: 'Role is required',
        error: 'ROLE_REQUIRED',
      });
    }

    
    if (!this.validRoles.includes(role)) {
      throw new BadRequestException({
        success: false,
        message: `Role must be one of: ${this.validRoles.join(', ')}`,
        error: 'INVALID_ROLE',
      });
    }

    return value;
  }
}