import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import Users from '../entities/users';
import Account from '../entities/account';

const dbConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'M.M',
  //password: 'admin',
  database: 'postgres',
  synchronize: false,
  logging: true,
  entities: [Users, Account],
};

export default dbConfig;
