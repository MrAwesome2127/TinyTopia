import sequelize from '../config/connection.js';
import { HomeFactory } from './home';
import { UserFactory } from './user';

const Home = HomeFactory(sequelize);

const User = UserFactory(sequelize);

export { Home, User };