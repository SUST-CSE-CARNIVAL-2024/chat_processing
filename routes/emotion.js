const router = require('express-promise-router')();
const EmotionController = require("../apiController/emotion").EmotionController;
let emotionController = new EmotionController();


router.post("/", emotionController.getEmotion);


module.exports = router;