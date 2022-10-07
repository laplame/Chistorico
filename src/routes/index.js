const {Router} = require ('express');
const router = Router();
const path = require('path');
const Image = require('../models/Image')
const { unlink } = require('fs-extra');
const {uploadImage} = require ('../utils/cloudinary.js')
const cloudinary = require('cloudinary')

cloudinary.config({
 cloud_name: process.env['cloud_name'],
 api_key: process.env['api_key'],
 api_secret: process.env['api_secret']
})


router.get('/', async (req, res) => {
  const images = await Image.find()
  //console.log(images)
  res.render('index', {images});
});

router.get('/upload', (req, res) => {
   const images = res.render('./upload');
});


router.get('/carrito', (req, res) => {
   const images = res.render('./carrito');
});


router.get('/image/:id', async (req, res) => {
    const { id } = req.params;
    const image = await Image.findById(id);
    res.render('profile', { image });
});



router.get('/image/:id/delete', async (req, res) => {
    const { id } = req.params;
    const imageDeleted = await Image.findByIdAndDelete(id);
    await unlink(path.resolve('./src/public' + imageDeleted.path));
    res.redirect('/');
});

module.exports = router; 

