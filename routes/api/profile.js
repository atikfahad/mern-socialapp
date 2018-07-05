const express = require("express");
const router = express.Router();

// @route GET api/profile/test
// @desc Test Profile Route
// @access Public
router.get("/test", (req, res) =>
  res.json({
    message: "Profile works"
  })
);

module.exports = router;
