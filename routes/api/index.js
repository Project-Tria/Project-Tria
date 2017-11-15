const router = require("express").Router();
const jobRoutes = require("./jobs");

// job routes
router.use("/", jobRoutes);


module.exports = router;