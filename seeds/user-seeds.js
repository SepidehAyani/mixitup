// Perhaps user data here will store favorite drinks?
// Create another file for user/created drinks, or store here too?

const { Users } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  }
];

const seedUsers = () => Users.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
