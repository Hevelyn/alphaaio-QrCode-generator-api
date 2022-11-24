const qrCodeController = {
  addQrCode: addQrCode,
  findQrCodes: findQrCodes,
  findQrCodeById: findQrCodeById,
  updateQrCode: updateQrCode,
  deleteById: deleteById,
};

let qrCodes = [
  {
    id: 1,
    qrCode: {
      url: "https://www.alphaa.io/home",
      image: "https://www.alphaa.io/assets/img/digital-2.png",
    } 
  },
];

function addQrCode(req, res) {
  try {
    const lastId = qrCodes[qrCodes.length - 1].id;
    const newQrCode = {
      id: lastId + 1,
      qrCode: {  url, image }  = req.body
    }

    qrCodes.push(newQrCode);
    res.send(newQrCode);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

function findQrCodes(req, res) {
  try {
    res.json(qrCodes);
  } catch (error) {
    console.error(error);
  }
}

function findQrCodeById(req, res) {
  try {
    const qrCodeId = req.params.id;
    const searchQrCode = qrCodes.find(
      (qrCode) => Number(qrCode.id) === Number(qrCodeId)
    )

    if (!searchQrCode) {
      return res.json("QR Code not found!");
    }

    res.json(searchQrCode);
  } catch (error) {
    console.error(error);
  }
}

function updateQrCode(req, res) {
  try {
    const qrCodeId = req.params.id;
    const searchQrCode = qrCodes.find(
      (qrCode) => Number(qrCode.id) === Number(qrCodeId)
    );

    if (!searchQrCode) {
      return res.json("QR Code not found!");
    }

    const UpQrCode = {
      ...searchQrCode,
      qrCode: { url: url, image: image }  = req.body
    }

    qrCodes = qrCodes.map((qrCode) => {
      if (Number(qrCode.id) === Number(qrCodeId)) {
        qrCode = UpQrCode;
      }
      return qrCode;
    });
    res.json(UpQrCode)
  } catch (error) {
    console.error(error)
  }
}

function deleteById(req, res) {
  try {
    const qrCodeId = req.params.id
    const searchQrCode = qrCodes.find(
      (qrCode) => Number(qrCode.id) === Number(qrCodeId)
    );

    if (!searchQrCode) {
      return res.json("QR Code not found!");
    }

    qrCodes = qrCodes.filter(
      (qrCode) => Number(qrCode.id) !== Number(qrCodeId)
    );

    res.json("QR Code deleted!")
  } catch (error) {
    console.error(error);
  }
}

module.exports = qrCodeController;
