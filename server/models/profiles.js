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

const updateGear = async (id, gear) => {
  try {
    const profile = await Profile.findById(id);
    profile.gear.push(gear); 
    await profile.save();
  } catch (err) {
    console.error(err);
  }
}

const updateWishList = async (id, wishlist) => {
  try {
    const profile = await Profile.findById(id);
    profile.wishlist.push(wishlist); 
    await profile.save();
  } catch (err) {
    console.error(err);
  }
}

const deleteGear = async (id, gearId) => {
  try {
    await Profile.updateOne(
      { _id: id },
      { $pull: { gear: { _id: gearId } } }
    );
  } catch (err) {
    console.error(err);
  }
}

const deleteWish = async (id, gearId) => {
  try {
    await Profile.updateOne(
      { _id: id },
      { $pull: { wishlist: { model: gearId } } }
    );
  } catch (err) {
    console.error(err);
  }
}


module.exports = {getAll, addOne, updateEmail, updateGear, updateWishList, deleteGear, deleteWish};