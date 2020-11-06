const router = require("express").Router();
const path = require("path")
const apiRoutes = require("./api")

// If path specifies api, use apiRoutes
router.use("/api", apiRoutes)

// Otherwise, serve react-app ***
router.use((req, res) => {
    console.log("general routes have been hit")
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

module.exports = router;

// *** in case of not react, create another dir called "html" to create routes to serve html