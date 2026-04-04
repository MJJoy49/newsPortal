import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('share_counts')
export class ShareCount {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  platform: string;

  @Column({
    type: 'int',
    default: 0,
  })
  count: number;
}