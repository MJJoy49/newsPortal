import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../enum/role.enum";
import { Status } from "../enum/status.enum";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: Role,
    default: Role.ADMIN, // Optional default, change if needed
  })
  role: Role;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.INACTIVE, // Optional default
  })
  status: Status;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  photo?: string;

  @Column({ nullable: true })
  bio?: string;

  @Column({ nullable: true })
  designation?: string;

  @Column({ nullable: true })
  facebook?: string;

  @Column({ nullable: true })
  twitter?: string;

  @Column({ nullable: true })
  linkedin?: string;

  @Column({ nullable: true })
  instagram?: string;
}