import { Logger, Module } from '@nestjs/common';
import { AuthUserEntity } from '../entities/auth-user.entity';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';

@Module({
  imports: [AuthUserEntity],
  controllers: [AuthController],
  providers: [AuthService, Logger],
  exports: [AuthService],
})
export class AuthModule {}
