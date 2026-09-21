import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { AuthUserBaseSchema } from '../entities/auth-user.entity.dto';
import { UserBaseSchema } from '../../user/entities/user.entity.dto';

export const RegisterPayloadSchema = AuthUserBaseSchema.pick({
  username: true,
})
  .merge(
    UserBaseSchema.pick({
      firstname: true,
      lastname: true,
    }),
  )
  .extend({
    password: z.string(),
    confirmPassword: z.string(),
  });
export class RegisterPayloadDto extends createZodDto(RegisterPayloadSchema) {}
export type RegisterPayload = z.infer<typeof RegisterPayloadDto>;
