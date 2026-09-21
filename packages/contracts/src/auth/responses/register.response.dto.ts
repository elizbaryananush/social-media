import { z } from 'zod';
import { AuthUserBaseSchema } from '../entities/auth-user.entity.dto';
import { createZodDto } from 'nestjs-zod';

export const UserSchema = AuthUserBaseSchema.omit({
  passwordHash: true,
  refreshToken: true,
});

export const RegisterResponseSchema = z.object({
  accessToken: z.string(),
  user: UserSchema,
});

export class RegisterResponseDto extends createZodDto(RegisterResponseSchema) {}
export type RegisterResponse = z.infer<typeof RegisterResponseDto>;
