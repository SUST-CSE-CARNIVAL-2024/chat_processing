const router = require('express-promise-router')();
const EmotionController = require("../apiController/emotion").EmotionController;
let emotionController = new EmotionController();

/***
 *  {
 *     "question1": "I am feeling very sad today",
 *     "ans1": "I am sorry to hear that, why do you feel sad?",
 *     "question2": "I am feeling very happy today",
 *     "ans2": "I am glad to hear that, why do you feel happy?"
 *  }
 */

router.post("/", emotionController.getEmotion);


module.exports = router;