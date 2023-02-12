const router = require('express').Router();

const { getmail } = require('../controller/appController.js')


/** HTTP Reqeust */

router.post('/getmail', getmail);


module.exports = router;