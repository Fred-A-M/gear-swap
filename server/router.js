const profiles = require('./controllers/profiles');
const requests = require('./controllers/requests');
const express = require('express');
const router = express.Router();

//Profiles
router.route('/profiles') 
.get(profiles.getProfiles)
.post(profiles.postProfile)

router.route('/profiles/:id/email') 
.put(profiles.updateProfileEmail)

router.route('/profiles/:id/gear') 
.put(profiles.updateProfileGear)

router.route('/profiles/:id/wishlist') 
.put(profiles.updateProfileWishList)

router.route('/profiles/:id/gear/delete')
.put(profiles.deleteProfileGear)

router.route('/profiles/:id/wishlist/delete') 
.put(profiles.deleteProfileWish)

//Requests
router.route('/requests')
.get(requests.getRequests)

router.route('/requests/send')
.post(requests.sendRequest)

router.route('/requests/:id/accept')
.put(requests.acceptRequest)

router.route('/requests/:id/reject')
.put(requests.rejectRequest)


module.exports = router;