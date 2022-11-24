const express = require('express');
const router = express.Router();
const qrCodesRoutes = require('./qrCodes.route')

router.use('/codes-alphaaio', qrCodesRoutes);

module.exports = router;