import { IsArray, ArrayNotEmpty, IsUUID, ArrayUnique } from 'class-validator';

export class UpdateTagsDTO {
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  tagIds!: string[];
}
