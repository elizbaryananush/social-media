import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const UserBaseSchema = z.object({
  userId: z.uuid(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  createdAt: z.date(),
});

export class UserBaseDto extends createZodDto(UserBaseSchema) {}
export type UserBase = z.infer<typeof UserBaseDto>;
