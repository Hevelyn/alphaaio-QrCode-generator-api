const express = require('express');
const router = express.Router();
const qrCodeController = require('../controllers/qrCode.controller')

router.post('/',  qrCodeController.addQrCode)
router.get('/', qrCodeController.findQrCodes)
router.get('/:id', qrCodeController.findQrCodeById);
router.put('/:id', qrCodeController.updateQrCode);
router.delete('/:id', qrCodeController.deleteById);

module.exports = router;