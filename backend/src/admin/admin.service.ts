/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */

/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable prettier/prettier */
import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { UserRole } from './enums/user-role.enum';
import { UserStatus } from './enums/user-status.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { IApiResponse } from './interfaces/api-response.interface';
import { UpdateUserDto } from './dto/update-user.dto';

//----------------↟↟↟↟--imports---------

enum ActivityAction {
  USER_CREATED = 'USER_CREATED',
  USER_UPDATED = 'USER_UPDATED',
  USER_DELETED = 'USER_DELETED',
  USER_STATUS_CHANGED = 'USER_STATUS_CHANGED',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

interface IActivityLog {
  id: string;
  userId: string;
  action: ActivityAction;
  details?: string;
  targetId?: string;
  createdAt: Date;
}
//-------------------------------------



@Injectable()
export class AdminService {
  // demo dataset
  private usersDataSet: IUser[] = [
    {
    id: 'user-001',
    name: 'Admin User',
    email: 'admin@newsportal.com',
    password: '123456',
    role: UserRole.ADMIN,
    status: UserStatus.ACTIVE,
    gender: 'male',                  
    phone: '01700000001',
    designation: 'Admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'user-002',
    name: 'John Reporter',
    email: 'reporter1@newsportal.com',
    password: '123456',
    role: UserRole.REPORTER,
    status: UserStatus.ACTIVE,
    gender: 'male',                  
    phone: '01700000002',
    designation: 'Senior Reporter',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ];

  // activity log dataset
  private activityLogsDataSet: IActivityLog[] = [];

  // (createUser) 01: POST /admin/users
  public async createUser(dto: CreateUserDto): Promise<IApiResponse> {
    this.validateEmailUniqueness(dto.email);

    const newUser = this.createUserEntity(dto);
    this.usersDataSet.push(newUser);

    return this.formatUserResponse(newUser);
  }

  

  //-------------(createUser) helper functions---------------------
  private createUserEntity(dto: CreateUserDto): IUser {
    const now = new Date();
    return {
      id: this.createId(),
      ...dto,
      status: UserStatus.ACTIVE,
      createdAt: now,
      updatedAt: now,
    };
  }

  private createId(): string {
    if (this.usersDataSet.length === 0) {
      return 'user-001';
    }

    const lastUser = this.usersDataSet[this.usersDataSet.length - 1];
    const lastId = lastUser.id;

    const prefix = 'user-';
    const numberPart = lastId.replace(prefix, '').trim();

    const lastNumber = isNaN(parseInt(numberPart, 10))
      ? this.usersDataSet.length
      : parseInt(numberPart, 10);

    const nextNumber = lastNumber + 1;
    const newNum = nextNumber.toString().padStart(3, '0');

    return `${prefix}${newNum}`;
  }

  private validateEmailUniqueness(email: string): void {
    const exists = this.usersDataSet.find((u) => u.email === email);
    if (exists) {
      throw new ConflictException({
        success: false,
        message: 'Email already exists',
        error: 'EMAIL_EXISTS',
      });
    }
  }

  private formatUserResponse(user: IUser): IApiResponse {
    return {
      success: true,
      message: 'User created successfully',
      data: {
        id: user.id,
        name: user.name,
        role: user.role,
        status: user.status,
      },
    };
  }
  //-------------End(createUser) helper functions---------------------

  // 02: GET /admin/users?role=&status=
  async getUsers(role?: string, status?: string): Promise<IApiResponse> {
    let filtered = [...this.usersDataSet];

    if (role) {
      filtered = filtered.filter((u) => u.role === role);
    }

    if (status) {
      filtered = filtered.filter((u) => u.status === status);
    }

    const usersWithoutPassword = filtered.map(({ password, ...rest }) => rest);

    return {
      success: true,
      data: {
        users: usersWithoutPassword,
        total: usersWithoutPassword.length,
      },
    };
  }

  // 03: GET /admin/users/:id
  async getUserById(id: string): Promise<IApiResponse> {
    const user = this.usersDataSet.find((u) => u.id === id);

    if (!user) {
      throw new NotFoundException({
        success: false,
        message: 'User not found',
        error: 'USER_NOT_FOUND',
      });
    }

    const { password, ...userWithoutPassword } = user;

    return {
      success: true,
      data: userWithoutPassword,
    };
  }

  // 04: PUT /admin/users/:id
  async updateUser(id: string, dto: UpdateUserDto): Promise<IApiResponse> {
    const index = this.usersDataSet.findIndex((u) => u.id === id);

    if (index === -1) {
      throw new NotFoundException({
        success: false,
        message: 'User not found',
        error: 'USER_NOT_FOUND',
      });
    }

    this.usersDataSet[index] = {
      ...this.usersDataSet[index],
      ...dto,
      updatedAt: new Date(),
    };

    this.addActivityLog(
      'user-001',
      ActivityAction.USER_UPDATED,
      `Updated user: ${id}`,
      id,
    );

    return {
      success: true,
      message: 'User updated successfully',
    };
  }

  // 05: DELETE /admin/users/:id
  async deleteUser(id: string, currentUserId: string): Promise<IApiResponse> {
    // prevent self delete
    if (id === currentUserId) {

      throw new ForbiddenException({
        success: false,
        message: 'You cannot delete yourself',
        error: 'SELF_DELETE_NOT_ALLOWED',
      });

    }

    const index = this.usersDataSet.findIndex((u) => u.id === id);

    if (index === -1) {
      throw new NotFoundException({
        success: false,
        message: 'User not found',
        error: 'USER_NOT_FOUND',
      });
    }

    const deletedUser = this.usersDataSet.splice(index, 1)[0];

    this.addActivityLog(
      currentUserId,
      ActivityAction.USER_DELETED,
      `Deleted user: ${deletedUser.name}`,
      id,
    );

    return {
      success: true,
      message: 'User deleted successfully',
    };
  }

  // simple helper: add activity
  private addActivityLog(
    userId: string,
    action: ActivityAction,
    details?: string,
    targetId?: string,
  ): void {
    const nextIndex = this.activityLogsDataSet.length + 1;
    const id = `log-${nextIndex.toString().padStart(3, '0')}`;

    const log: IActivityLog = {
      id,
      userId,
      action,
      details,
      targetId,
      createdAt: new Date(),
    };

    this.activityLogsDataSet.push(log);
  }
}