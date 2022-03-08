const seedUsers = require('./user-seeds');

const seedBrandy = require('./drink-type/brandy-seeds');
const seedGin = require('./drink-type/gin-seeds');
const seedNA = require('./drink-type/nonalcoholic-seeds');
const seedRum = require('./drink-type/rum-seeds');
const seedScotch = require('./drink-type/scotch-seeds');
const seedTequila = require('./drink-type/tequila-seeds');
const seedVodka = require('./drink-type/vodka-seeds');
const seedWhiskey = require('./drink-type/whiskey-seeds');

// const seedBeverageTypes = require('./beverage-type-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  console.log('inside seedAll');
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUsers();
  console.log('inside seedUsers');
  console.log('--------------');

  await seedBrandy();
  console.log('inside seedBrandy');
  console.log('--------------');

  await seedGin();
  console.log('inside seedGin');
  console.log('--------------');

  await seedNA();
  console.log('inside seedNA');
  console.log('--------------');

  await seedRum();
  console.log('inside seedRum');
  console.log('--------------');

  await seedScotch();
  console.log('inside seedScotch');
  console.log('--------------');

  await seedTequila();
  console.log('inside seedTequila');
  console.log('--------------');

  await seedVodka();
  console.log('inside seedVodka');
  console.log('--------------');

  await seedWhiskey();
  console.log('inside seedWhiskey');
  console.log('--------------');

  // await seedBeverageTypes();
  // console.log('--------------');
  console.log('before process.exit');
  process.exit(0);
  console.log('after process.exit');
};
console.log('before seedAll');
seedAll();
console.log('after seedAll');