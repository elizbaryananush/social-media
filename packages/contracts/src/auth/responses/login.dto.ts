import { z } from 'zod';
import { AuthUserBaseSchema } from '../entities/auth-user.entity.dto';
import { createZodDto } from 'nestjs-zod';

export const UserSchema = AuthUserBaseSchema.omit({
  passwordHash: true,
  refreshToken: true,
});

export const LoginResponseSchema = z.object({
  accessToken: z.string(),
  user: UserSchema,
});

export class LoginResponseDto extends createZodDto(LoginResponseSchema) {}
export type LoginResponse = z.infer<typeof LoginResponseDto>;
