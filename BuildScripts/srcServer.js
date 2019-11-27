// //// old js syntax
// const express = require("express");
// const path = require("path");
// const open = require("open"); //to open the site

////new js syntax, need babel or type script for transpiling this to old syntax for browsers
import express from "express";
import path from "path";
import open from "open";

const port = 4242;

const app = express();

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
