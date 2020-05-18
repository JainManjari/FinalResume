const express=require('express');

const router=express.Router();

const homeController=require('../controllers/home_controller');

router.get("/",homeController.home);
router.get("/calculator",homeController.calculator);
router.get("/music-website",homeController.music);
router.get("/music-website/singer-playlist",homeController.music2);

module.exports=router;