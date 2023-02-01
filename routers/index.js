'use strict';
const express = require('express');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const rootRouter = express.Router();

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.lastIndexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const router = require(path.join(__dirname, file))
    rootRouter.use(`/${file.substring(0,file.indexOf('.'))}s`,router);
  });

module.exports = rootRouter;
