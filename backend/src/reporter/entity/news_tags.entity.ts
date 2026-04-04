import { Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('news_tags')
export class NewsTags {
  @PrimaryGeneratedColumn()
  id: number;
}
