import { config } from 'dotenv';
config();

import { Dialect, Sequelize } from 'sequelize';

console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT as Dialect || 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

export default sequelize;
