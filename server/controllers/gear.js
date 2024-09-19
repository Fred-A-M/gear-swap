const gear = require('../models/gear')

async function getGear (req, res) {
  try {
    const result = await gear.getAll();
    res.json(result);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

async function postGear(req, res) {
  try {
    await gear.addOne(req.body);
    res.status(201).send('Added');
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}


module.exports = {getGear, postGear};