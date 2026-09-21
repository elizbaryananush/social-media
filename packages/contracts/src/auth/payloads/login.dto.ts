import { z } from 'zod';
import { AuthUserBaseSchema } from '../entities/auth-user.entity.dto';
import { createZodDto } from 'nestjs-zod';

export const LoginPayloadSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export class LoginPayloadDto extends createZodDto(LoginPayloadSchema) {}
export type LoginPayload = z.infer<typeof LoginPayloadDto>;
