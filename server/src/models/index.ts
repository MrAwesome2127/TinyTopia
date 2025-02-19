import sequelize from '../config/connection';
import { HomeFactory } from './home';
import { UserFactory } from './user';


const Home = HomeFactory(sequelize);
const User = UserFactory(sequelize);

Home.belongsToMany(User, 
    { through: 'UserHomes' 
});


User.hasMany(Home, 
    { foreignKey: 'modelName_id'
});


export { Home, User };