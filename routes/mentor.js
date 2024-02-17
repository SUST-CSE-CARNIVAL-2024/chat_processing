const router = require('express-promise-router')();

const MentorController = require("../apiController/mentor").MentorController;

let mentorController = new MentorController();

router.post("/qualification", mentorController.getQualification);

module.exports = router;