const {Request} = require('./dbconnect');

const getAll = async () => {
  try {
    let res = await Request.find({});
    return res;
  } catch (err) {
    console.error(err);
  }
};

async function sendRequest(senderId, receiverId) {
  try{
    const request = new Request({ senderId, receiverId });
    await request.save();
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

async function deleteRequest(requestId) {
  try{
    // await Request.findByIdAndUpdate(requestId, {status: 'accepted'});
    await Request.deleteOne({_id: requestId});
  } catch (err) {
    console.error(err);
  }
}

module.exports = {sendRequest, acceptRequest, getAll, deleteRequest};