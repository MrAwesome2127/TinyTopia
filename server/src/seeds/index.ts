import { seedHomes } from './models-seeds' // Import the function to seed homes
import { seedUsers } from './users-seeds' // Import the function to seed users
import sequelize from '../config/connection';

const seedAll = async ():Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedHomes(); 
    console.log('\n----- HOMES SEEDED -----\n');

    await seedUsers(); 
    console.log('\n----- USERS SEEDED -----\n');

    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
