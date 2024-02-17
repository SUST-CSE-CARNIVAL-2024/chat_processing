const emotionAI = require('../ai/emotion');
class EmotionController {
    constructor() { }

    getEmotion = async (req, res, next) =>{
        if(req.body.qna_list === undefined){
            res.status(400).send("qna_list is not defined");
        }
        let result = await emotionAI.getEmotionProbDist(req.body.qna_list);
        res.status(200).json(result);
    }
}

module.exports = {
    EmotionController
}