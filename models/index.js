const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require("../config/db.config.js");

const app = express();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.listings = require("./listing.model.js")(mongoose);

module.exports = db;