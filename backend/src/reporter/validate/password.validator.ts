import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'passwordValidator', async: false })
export class PasswordValidator implements ValidatorConstraintInterface {
  validate(value: any, validationArguments?: ValidationArguments): boolean {
    if (typeof value === 'string') {
      return /^(?=.*[A-Z]).{6,}$/.test(value);
    }
    return false;
  }
  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'Password must be at least 6 characters and contain a capital letter';
  }
}
