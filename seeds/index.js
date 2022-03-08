const seedUsers = require('./user-seeds');
const seedDrinksData = require('./drink-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('-------Syncing Database-------');
  await seedUsers();
  console.log('-------Seeding Users-------');
  await seedDrinksData();
  console.log('-------Seeding Drinks-------');
  process.exit(0);
};
seedAll();