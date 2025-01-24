import sequelize from '../config/connection.js';
import { HomeFactory } from './home.ts';
import { UserFactory } from './user.ts';

const Home = HomeFactory(sequelize);

const User = UserFactory(sequelize);

export { Home, User };