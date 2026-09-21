import { email, z } from 'zod';
import { AuthUserBaseSchema } from '../entities/auth-user.entity.dto';
import { createZodDto } from 'nestjs-zod';

export const CheckUsernamePayloadSchema = AuthUserBaseSchema.pick({
  username: true,
});

export class CheckUsernamePayloadDto extends createZodDto(
  CheckUsernamePayloadSchema,
) {}
export type CheckUsernamePayload = z.infer<typeof CheckUsernamePayloadDto>;
