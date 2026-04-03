import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Media {
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
  type: string;
  @Column({
    type: 'varchar',
    nullable: true,
  })
  url: string;
  @Column({
    type: 'varchar',
    nullable: true,
  })
  alterText: string;
}
