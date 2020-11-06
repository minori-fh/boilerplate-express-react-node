// DEPENDENCIES
const express = require("express");
const routes = require("./routes");

// EXPRESS CONFIGURATIONS
const PORT = process.env.PORT || 8080

const app = express() // start express server

app.use(express.urlencoded({ extended: true })); // express middleware to parse data between req and res
app.use(express.json()); // express middleware to parse data between req and res

// ROUTER
app.use(routes)
if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build")); // this folder will not exist until "npm run build" is run for the first time in the client
}

// LISTENER
app.listen(PORT, ()=> {
    console.log(`🌎 SERVER IS LISTENING ON 🌎 http://localhost:${PORT} !`)
})
