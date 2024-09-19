const mongoose = require('mongoose');
const {Profile} = require('./dbconnect');

const profiles = [
  {
    username: 'JamDonut97',
    email: 'jammyd@gmail.com',
    number: '07893321456',
    gear: [
      {
        instrument: 'Guitar',
        make: 'Godin',
        model: 'Session HT'
      }
    ],
    wishlist: [
      {
        instrument: 'Bass Guitar',
        make: 'Fender',
        model: 'Precision Bass'
      }
    ]
  },
  {
    username: 'KingWillis',
    email: 'KW1934@gmail.com',
    number: '0740440046',
    gear: [
      {
        instrument: 'Microphone',
        make: 'Sure',
        model: 'SM58'
      },
      {
        instrument: 'Drum Machine',
        make: 'Roland',
        model: 'TR-08'
      },
    ],
    wishlist: [
      {
        instrument: 'Tape Recorder',
        make: 'Tascam',
        model: 'Porta02'
      }
    ]
  },
  
];

(async function seedDB () {
  try {
    await Profile.deleteMany({}); // Clear the collection first
    await Profile.insertMany(profiles); // Insert predefined cards
    console.log('Database seeded with profiles!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
})();