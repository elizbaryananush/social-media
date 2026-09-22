import { Injectable, Logger } from '@nestjs/common';
import { AuthUserEntity } from '../entities/auth-user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(private authUserRepository: Repository<AuthUserEntity>) {}
  check_username() {
    console.log('sladjhkajsdh');
  }

  async register() {
    await this.authUserRepository.create({
      username: 'dfjsdf',
    });
  }

  login() {}

  logout() {}

  refresh() {}
}
