const requests = require('../models/requests');

async function getRequests (req, res) {
  try {
    const result = await requests.getAll();
    res.json(result);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

async function sendRequest (req, res) {
  try {
    const {senderId, receiverId} = req.body;
    await requests.sendRequest(senderId, receiverId);
    res.status(201).send('Request added');
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function acceptRequest (req, res) {
  try {
    await requests.acceptRequest(req.params.id); 
    res.status(201).send('Request accepted');
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function rejectRequest (req, res) {
  try {
    await requests.deleteRequest(req.params.id);
    res.status(201).send('Request rejected');
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

module.exports = {sendRequest, acceptRequest, getRequests, rejectRequest}