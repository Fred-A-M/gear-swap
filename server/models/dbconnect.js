const mongoose = require('mongoose');

(async function connectDB () {
  await mongoose.connect('mongodb://127.0.0.1/gearSwap')
  console.log('Connected successfully to MongoDB server');
})();

const gearSchema = new mongoose.Schema({
  instrument: {
    type: String,
    required: true
  },
  make: {
    type: String,
    required: false
  },
  model: {
    type: String,
    required: false
  },
  imageURL: {
    type: String,
    required: false
  }
});

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  imageURL: {
    type: String,
    required: false
  },
  gear: {
    type: [gearSchema],
    required: false
  },
  wishlist: {
    type: [gearSchema],
    required: false
  },
});

const requestSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const Profile = mongoose.model('Profile', profileSchema);
const Gear = mongoose.model('Gear', gearSchema);
const Request = mongoose.model('Request', requestSchema);
module.exports = {Profile, Gear, Request};