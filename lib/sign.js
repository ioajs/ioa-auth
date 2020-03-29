'use strict';

const app = require('@app');
const jwt = require('jsonwebtoken');

const { password } = app.config;

module.exports = function (data, options) {

   return jwt.sign(data, password, options);

}