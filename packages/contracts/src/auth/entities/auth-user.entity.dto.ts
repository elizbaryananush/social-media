import { createZodDto } from 'nestjs-zod';
import { email, z } from 'zod';

export const AuthUserBaseSchema = z.object({
  userId: z.uuid(),
  username: z.string(),
  email: z.email(),
  passwordHash: z.string(),
  refreshToken: z.string(),
  isEmailVerified: z.boolean().default(false),
  createdAt: z.date(),
});

export class AuthUserBaseDto extends createZodDto(AuthUserBaseSchema) {}
export type AuthUserBase = z.infer<typeof AuthUserBaseDto>;
