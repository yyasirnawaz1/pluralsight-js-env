// //// old js syntax
// const express = require("express");
// const path = require("path");
// const open = require("open"); //to open the site

////new js syntax, need babel or type script for transpiling this to old syntax for browsers
import express from "express";
import path from "path";
import open from "open";

import webpack from "webpack";
import config from "../webpack.config.dev";

const port = 4242;

const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, error => {
  if (error) {
    console.log(error);
  } else {
    //open("http://localhost:" + port);
  }
});
