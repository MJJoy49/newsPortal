import {
  IsString,
  IsNotEmpty,
  Matches,
  IsDateString,
  IsUrl,
} from 'class-validator';

export class CreateReporterDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[^0-9]+$/, {
    message: 'Name must not contain numbers',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/[@#$&]/, {
    message:
      'Password must contain at least one special character (@, #, $, &)',
  })
  password: string;

  @IsDateString()
  dateOfBirth: string;

  @IsUrl()
  socialMediaLink: string;
}
