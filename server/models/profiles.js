const {Profile} = require('./dbconnect');

const getAll = async () => {
  try {
    let res = await Profile.find({});
    return res;
  } catch (err) {
    console.error(err);
  }
};

const addOne = async (profile) => {
  try {
    const newProfile = new Profile(profile);
    await newProfile.save();
    return newProfile;
  } catch (err) {
    console.error(err);
  }
}

const updateEmail = async (id, email) => {
  try {
    const profile = await Profile.findById(id);
    profile.email = email; 
    await profile.save();
  } catch (err) {
    console.error(err);
  }
}

const updateNumber = async (id, number) => {
  try {
    const profile = await Profile.findById(id);
    profile.number = number; 
    await profile.save();
  } catch (err) {
    console.error(err);
  }
}

module.exports = {getAll, addOne, updateEmail, updateNumber};