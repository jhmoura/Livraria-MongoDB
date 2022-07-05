const multer = require("multer");
const path = require("path");
const fs = require('fs');

const imagesFolder = path.join("src/public", "images");

const storage = multer.diskStorage({
  destination: function (req, file, tchau) {
    if (!fs.existsSync(imagesFolder)) {
      fs.mkdirSync(imagesFolder, { recursive: true });
    }
    tchau(null, imagesFolder);
  },
  filename: function (req, file, alo) {
    alo(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;