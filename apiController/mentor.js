const mentorAI = require('../ai/mentor');

class MentorController {
    constructor() { }

    getQualification = async (req, res, next) =>{
        if(req.body.qna_list === undefined){
            res.status(400).send("qna_list is not defined");
        }
        let result = await mentorAI.getQualification(req.body.qna_list);
        res.status(200).json(result);
    }
}

module.exports = {
    MentorController
}