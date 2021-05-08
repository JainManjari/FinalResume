const express=require('express');

const router=express.Router();

const homeController=require('../controllers/home_controller');

router.get("/",homeController.home);
router.get("/blog/article1",homeController.blog1);
router.get("/calculator",homeController.calculator);
router.get("/music-website",homeController.music);
router.get("/music-website/singer-playlist",homeController.music2);
router.get("/IPod",homeController.ipod);
router.get("/ToDoApp",homeController.todoapp);
router.get("/ping-pong",homeController.pingpong);
router.post("/send-message",homeController.newMessage);

//console.log("routes")

module.exports=router;