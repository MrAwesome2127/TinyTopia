import { seedHomes } from './models-seeds.js' // Import the function to seed homes
import { seedUsers } from './users-seeds.js' // Import the function to seed users
import sequelize from '../config/connection.js';

const seedAll = async () => {
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
