import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('News')
export class News {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  title: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  content: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  status: string;
}
