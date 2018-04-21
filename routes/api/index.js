const router = require("express").Router();
const articleRoutes = require("./article");

// articleRoutes
router.use("/article", articleRoutes);

module.exports = router;
