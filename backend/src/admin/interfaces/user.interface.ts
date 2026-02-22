/* eslint-disable prettier/prettier */
import { UserRole } from "../enums/user-role.enum";
import { UserStatus } from "../enums/user-status.enum";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string; // text for now
  role: UserRole;
  status: UserStatus;
  phone?: string;
  designation?: string;
  createdAt: Date;
  updatedAt: Date;
}