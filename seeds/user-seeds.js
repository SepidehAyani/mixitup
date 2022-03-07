// Perhaps user data here will store favorite drinks?
// Create another file for user/created drinks, or store here too?

const { Users } = require('../models');

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
  }
];

const seedUsers = () => Users.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
