const express = require('express');
const routerOs = require('./os.router');
const router = express.Router();

router.use('/os', routerOs)

module.exports = router;