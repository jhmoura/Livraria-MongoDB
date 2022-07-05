const fs = require('fs')
const axios = require('axios').default;
const cloudinary = require('../config/cloudinary');

const BoookController = {
  async create(req, res) {
    try {
      const path = req.files[0].path

      //   // const url = await uploader(path)
        const uploadPath = await cloudinary.uploads(path, 'books')
      //   // return res.send(url)
//      fs.unlinkSync(path)
//      const newBook = await Books.create({
//        ...req.body,
//        url: uploadPath.url
//      });
//
//      return res.status(201).json(newBook);
    } catch (error) {
      console.log(error)
      return res.status(500).json(error);
    }
  }
};

module.exports = BoookController;
