require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
});

require('dotenv').config();
const express = require("express");
const cors = require('cors');
const helmet = require("helmet");
import passport from "passport"

//Database connection
import ConnectDB from './database/connection'

// //google authentication configuration
// import googleAuthConfig from './config/google.config'
// import privateRouteConfig from "./config/route.config";

// //passport config
// googleAuthConfig(passport);
// privateRouteConfig(passport);

const bms = express();
bms.use(cors());
bms.use(express.json());
bms.use(helmet());
// bms.use(passport.initialize());

//API
import Movies from "./API/movies"

bms.use("/movies", Movies);

const PORT = process.env.PORT || 4000;


bms.listen(PORT, () => {
    ConnectDB()
      .then(() => {
        console.log("Server is running !!!");
      })
      .catch((error) => {
        console.log("Server is running, but database connection failed...");
        console.log(error);
      });
  });
