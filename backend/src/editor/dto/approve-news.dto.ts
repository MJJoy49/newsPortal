import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class ApproveNewsDto {
  @IsNotEmpty()
  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  rejectionReason?: string;
}
