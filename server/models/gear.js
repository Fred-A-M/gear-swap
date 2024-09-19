const {Gear} = require('./dbconnect');

const getAll = async () => {
  try {
    let res = await Gear.find({});
    return res;
  } catch (err) {
    console.error(err);
  }
};

const addOne = async (gear) => {
  try {
    const newGear = new Gear(gear);
    await newGear.save();
    return newGear;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {getAll, addOne};