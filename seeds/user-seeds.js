const { User } = require(''../models'');

const userdata = [
  {
    id: 1,
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    id: 2,
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    id: 3,
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    id: 4,
    username: 'bonniepat',
    email: 'bonniep@comcast.net',
    password: 'password123'
  },
  {
    id: 5,
    username: 'jillnelson',
    email: 'jnelson@sogou.com',
    password: 'password123'
  },
  {
    id: 6,
    username: 'wrangler',
    email: 'wesrang@sogou.com',
    password: 'password123'
  },
  {
    id: 7,
    username: 'zhigss',
    email: 'zhiggs@biz.cnet',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;