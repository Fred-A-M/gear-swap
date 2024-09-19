const profiles = require('./controllers/profiles');
const gear = require('./controllers/gear');
const express = require('express');
const router = express.Router();

router.route('/profiles') 
.get(profiles.getProfiles)
.post(profiles.postProfile)

router.route('/profiles/:id/email') 
.put(profiles.updateProfileEmail)

router.route('/profiles/:id/number') 
.put(profiles.updateProfileNumber)


router.route('/gear') 
.get(gear.getGear)
.post(gear.postGear)


module.exports = router;