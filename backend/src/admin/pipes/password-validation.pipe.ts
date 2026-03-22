/* eslint-disable prettier/prettier */
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PasswordValidationPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {

    const password = value.password;

    
    if (!password) {
      throw new BadRequestException({
        success: false,
        message: 'Password is required',
        error: 'PASSWORD_REQUIRED',
      });
    }

    
    if (password.length < 6) {
      throw new BadRequestException({
        success: false,
        message: 'Password must be at least 6 characters',
        error: 'PASSWORD_TOO_SHORT',
      });
    }

    
    if (!/[A-Z]/.test(password)) {
      throw new BadRequestException({
        success: false,
        message: 'Password must contain at least one uppercase letter (A-Z)',
        error: 'PASSWORD_NO_UPPERCASE',
      });
    }

    return value;
  }
}