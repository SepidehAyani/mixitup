const seedUsers = require('./user-seeds');
const seedDrinksData = require('./drink-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  console.log('-------Syncing Database-------');
  await sequelize.sync({ force: true });

  console.log('-------Seeding Users-------');
  await seedUsers();

  console.log('-------Seeding Drinks-------');
  await seedDrinksData();

  process.exit(0);
};

seedAll();