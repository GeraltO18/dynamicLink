const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const updateroute = require("./api/update");
const PORT = process.env.PORT;

const app = express();
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));

app.use("/g2", updateroute);

app.listen(PORT || 3000);
