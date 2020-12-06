const router = require("express").Router();
const apiRoutes = require("./api")
const path = require("path")

// If path specifies api, use apiRoutes
router.use("/api", apiRoutes)

// ***

// serve react files at root route
router.get('/', function(req, res) {
    console.log("main catchall get route hit")
    res.sendFile(path.join(__dirname, '../client/build'));
});

router.use((req, res) => {
    console.log("main catchall * route hit")
    res.sendFile(path.join(__dirname, '../client/build'))
})


module.exports = router;
// *** in case of not react, create another dir called "html" to create routes to serve html