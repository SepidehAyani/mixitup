const seedDrink = require('./drink-seeds');
const seedUsers = require('./user-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedDrink();
  console.log('\n----- DRINK SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();