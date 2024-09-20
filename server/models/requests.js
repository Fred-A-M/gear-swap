const {Request} = require('./dbconnect');

async function sendRequest(senderId, receiverId) {
  try{
    const request = new Request({ senderId, receiverId });
    await request.save();
    res.status(201).send('Request Added');
  } catch (err) {
    console.error(err);
  }
}

async function acceptRequest(requestId) {
  try{
    // await Request.findByIdAndUpdate(requestId, {status: 'accepted'});
    const request = await Request.findById(requestId);
    request.status = 'accepted';
    await request.save();
  } catch (err) {
    console.error(err);
  }
}

module.exports = {sendRequest, acceptRequest};