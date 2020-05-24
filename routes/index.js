const express=require('express');

const router=express.Router();

const homeController=require('../controllers/home_controller');

router.get("/",homeController.home);
router.get("/calculator",homeController.calculator);
router.get("/music-website",homeController.music);
router.get("/music-website/singer-playlist",homeController.music2);
router.get("/counter",homeController.counter);
router.get("/ping-pong",homeController.pingpong);
router.post("/send-message",homeController.newMessage);
router.get("/struggle-gratitude",homeController.blog1);


module.exports=router;