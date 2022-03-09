const { User } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    pw: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    pw: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    pw: 'password123'
  },
  {
    username: 'bonniepat',
    email: 'bonniep@comcast.net',
    pw: 'password123'
  },
  {
    username: 'jillnelson',
    email: 'jnelson@sogou.com',
    pw: 'password123'
  },
  {
    username: 'wrangler',
    email: 'wesrang@sogou.com',
    pw: 'password123'
  },
  {
    username: 'zhigss',
    email: 'zhiggs@biz.cnet',
    pw: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
