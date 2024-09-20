const requests = require('../models/profiles');

async function sendRequest (req, res) {
  try {
    const {senderId} = req.params;
    const {receiverId} = req.body;
    await requests.sendRequest(senderId, receiverId);
    res.status(201).send('Added');
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function acceptRequest (req, res) {
  try {
    await requests.acceptRequest(req.body); // try res.body or req.params?
    res.status(201).send('Added');
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

module.exports = {sendRequest, acceptRequest}