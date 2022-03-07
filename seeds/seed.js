const seedUsers = require('./user-seeds');

const seedBrandy = require('./drink-type/brandy-seeds');
const seedGin = require('./drink-type/gin-seeds');
const seedNA = require('./drink-type/nonalcoholic-seeds');
const seedRum = require('./drink-type/rum-seeds');
const seedScotch = require('./drink-type/scotch-seeds');
const seedTequila = require('./drink-type/tequila-seeds');
const seedVodka = require('./drink-type/vodka-seeds');
const seedWhiskey = require('./drink-type/whiskey-seeds');

const seedBeverageTypes = require('./beverage-type-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedBrandy();
  console.log('--------------');

  await seedGin();
  console.log('--------------');

  await seedNA();
  console.log('--------------');

  await seedRum();
  console.log('--------------');

  await seedScotch();
  console.log('--------------');

  await seedTequila();
  console.log('--------------');

  await seedVodka();
  console.log('--------------');

  await seedWhiskey();
  console.log('--------------');

  await seedBeverageTypes();
  console.log('--------------');

  process.exit(0);
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

seedAll();