const seedDrink = require('./drink-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedDrink();
  console.log('\n----- DRINK SEEDED -----\n');

  process.exit(0);
};

seedAll();