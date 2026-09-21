import { z } from 'zod';

export const UserBaseSchema = z.object({
  userId: z.uuid(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  createdAt: z.date(),
});

export type User = z.infer<typeof UserBaseSchema>;
