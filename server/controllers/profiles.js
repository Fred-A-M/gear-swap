const profiles = require('../models/profiles')

async function getProfiles (req, res) {
  try {
    const result = await profiles.getAll();
    res.json(result);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

async function postProfile (req, res) {
  try {
    await profiles.addOne(req.body);
    res.status(201).send('Added');
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function updateProfileEmail (req, res) {
  try {
    const {id} = req.params;
    const {email} = req.body;
    await profiles.updateEmail(id, email);
    res.status(200).send('Email updated successfully');
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function updateProfileNumber (req, res) {
  try {
    const {id} = req.params;
    const {number} = req.body;
    await profiles.updateNumber(id, number);
    res.status(200).send('Number updated successfully');
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

module.exports = { getProfiles, postProfile, updateProfileEmail, updateProfileNumber };