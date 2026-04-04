/* eslint-disable prettier/prettier */
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class EmailValidationPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {

    const email = value.email;

    // Email 
    if (!email) {
      throw new BadRequestException({
        success: false,
        message: 'Email is required',
        error: 'EMAIL_REQUIRED',
      });
    }

    //@ 
    if (!email.includes('@')) {
      throw new BadRequestException({
        success: false,
        message: 'Email must contain @',
        error: 'INVALID_EMAIL_FORMAT',
      });
    }

    //@newsportal.com domain check
    if (!email.endsWith('@newsportal.com')) {
      throw new BadRequestException({
        success: false,
        message: 'Email must be from @newsportal.com domain',
        error: 'INVALID_EMAIL_DOMAIN',
      });
    }

    return value;
  }
}