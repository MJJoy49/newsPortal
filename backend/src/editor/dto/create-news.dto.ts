export class CreateNewsDto {
  title: string;
  subtitle?: string;
  content: string;
  categoryId: number;
  tagsId?: number[];
  thumbnailUrl?: string;
  isBreaking?: boolean;
}
