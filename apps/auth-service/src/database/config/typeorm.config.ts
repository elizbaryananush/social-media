import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';
import { join } from 'path';
import { AuthUserEntity } from '../../entities/auth-user.entity';

dotenvConfig({ path: join(__dirname, '../../../.env') });

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.AUTH_DB_HOST || 'localhost',
  port: parseInt(process.env.AUTH_DB_PORT || '5432', 10),
  username: process.env.AUTH_DB_USER || 'postgres',
  password: process.env.AUTH_DB_PASSWORD || 'postgres',
  database: process.env.AUTH_DB_NAME || 'auth_db',

  entities: [AuthUserEntity],

  migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
  migrationsTableName: 'migrations_history',

  synchronize: false,
  logging: process.env.NODE_ENV === 'development',

  // Connection Pooling Settings
  extra: {
    max: parseInt(process.env.DB_POOL_MAX || '20', 10),
    idleTimeoutMillis: 30000,
  },
};

// Default export is consumed by TypeORM CLI commands (migration:generate / migration:run)
export default new DataSource(typeOrmConfig);
