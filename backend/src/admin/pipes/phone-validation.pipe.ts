/* eslint-disable prettier/prettier */
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PhoneValidationPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {

    const phone = value.phone;

   
    if (!phone) {
      return value;
    }

    
    if (!/^[0-9]+$/.test(phone)) {
      throw new BadRequestException({
        success: false,
        message: 'Phone must contain only numbers',
        error: 'INVALID_PHONE_FORMAT',
      });
    }

    return value;
  }
}