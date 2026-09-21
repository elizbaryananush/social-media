import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('auth_user')
export class AuthUserEntity {
  @PrimaryGeneratedColumn('uuid')
  userId!: string;

  @Index({ unique: true })
  @Column({ type: 'varchar' })
  email!: string;

  @Index({ unique: true })
  @Column({ type: 'varchar' })
  username!: string;

  @Column({ type: 'varchar' })
  passwordHash!: string;

  @Column({ type: 'boolean', default: false })
  isEmailVerified!: boolean;

  @Column({ type: 'varchar', nullable: true })
  refreshTokenHash?: string | null;

  @CreateDateColumn()
  createdAt!: Date;
}
