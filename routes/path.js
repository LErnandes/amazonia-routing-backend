const express = require("express");
const router = express.Router();
const pathController = require("../controllers/pathController");


router.get(
  "/",
  async (req, res) => {
    // #swagger.tags = ['Path']
    return pathController.get(req, res);
  }
);

module.exports = router;
