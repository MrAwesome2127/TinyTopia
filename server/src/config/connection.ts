import { config } from 'dotenv';
config();

import { Dialect, Sequelize } from 'sequelize';


const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      "models_db",
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
