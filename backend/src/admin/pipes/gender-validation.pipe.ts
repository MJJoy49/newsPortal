/* eslint-disable prettier/prettier */
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { Gender } from '../enums/gender.enum';

@Injectable()
export class GenderValidationPipe implements PipeTransform {

  private validGenders = Object.values(Gender);

  transform(value: any, metadata: ArgumentMetadata) {

    const gender = value.gender;

    
    if (!gender) {
      throw new BadRequestException({
        success: false,
        message: 'Gender is required',
        error: 'GENDER_REQUIRED',
      });
    }

    
    if (!this.validGenders.includes(gender)) {
      throw new BadRequestException({
        success: false,
        message: 'Gender must be male/female/other',
        error: 'INVALID_GENDER',
      });
    }

    return value;
  }
}