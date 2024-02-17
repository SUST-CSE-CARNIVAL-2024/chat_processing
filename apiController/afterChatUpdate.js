const afterChatUpdateAI = require('../ai/afterChatUpdate');

class AfterChatUpdateController {
    constructor() { }

    updateChat = async (req, res, next) =>{
        if(req.body.username === undefined){
            res.status(400).send("username is not defined");
        }
        let result = await afterChatUpdateAI.getUpdatedEmotionProbDist(req.body.username);
        res.status(200).json(result);
    }
}

module.exports = {AfterChatUpdateController};