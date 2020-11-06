const router = require("express").Router();
const apiRoutes = require("./api")

// If path specifies api, use apiRoutes
router.use("/api", apiRoutes)

// ***

module.exports = router;

// *** in case of not react, create another dir called "html" to create routes to serve html