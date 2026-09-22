import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth-service')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('check-username')
  async check_username() {
    return this.authService.check_username;
  }

  @Post('register')
  async register() {
    return this.authService.register();
  }

  @Post('login')
  async login() {
    return this.authService.check_username;
  }

  @Post('logout')
  async logout() {
    return this.authService.check_username;
  }

  @Post('refresh')
  async refresh() {
    return this.authService.check_username();
  }
}
