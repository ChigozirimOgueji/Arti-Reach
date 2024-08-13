import connectToMongodb from "./config/database.config.js";

import express from "express";
const app = express();


import indexMiddleware from "./middleware/index.middleware.js";
import cors from "cors"; // Import cors

// DATABASE => MODEL => SERVICE => CONTROLLER => ROUTE => INDEXROUTE => INDEXMIDDLEWARE => VALIDATEMIDDLEWARE => SCHEMA => ROUTE TO CALL VALIDATE AND SCHEMA => APP.JS

app.use(cors());

indexMiddleware(app);

app.listen(5000, () => {
    connectToMongodb();
    console.log("Application running on port 5000");
});