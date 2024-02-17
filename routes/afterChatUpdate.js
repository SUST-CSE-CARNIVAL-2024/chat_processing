const router = require('express-promise-router')();

const AfterChatUpdateController = require("../apiController/afterChatUpdate").AfterChatUpdateController;

let afterChatUpdateController = new AfterChatUpdateController();

router.post("/", afterChatUpdateController.updateChat);

module.exports = router;
