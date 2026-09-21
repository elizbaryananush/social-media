import { email, z } from 'zod';
import { AuthUserBaseSchema } from '../entities/auth-user.entity.dto';
import { createZodDto } from 'nestjs-zod';

export const CheckUsernameResponseSchema = z.object({
  available: z.boolean(),
});

export class CheckUsernameResponseDto extends createZodDto(
  CheckUsernameResponseSchema,
) {}

export type CheckUsernameReponse = z.infer<typeof CheckUsernameResponseDto>;
