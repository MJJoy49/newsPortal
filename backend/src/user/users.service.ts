import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  public async createUser(userDTO) {
    const userPresent = await this.userRepo.findOne({
      where: { email: userDTO.email },
    });

    if (userPresent) {
      return { message: 'user is present' };
    }
    let newUser = this.userRepo.create(userDTO);
    newUser = await this.userRepo.save(newUser);
    return newUser;
  }
}
