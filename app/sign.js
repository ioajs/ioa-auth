'use strict';

const jwt = require('jsonwebtoken')
const { config } = require('ioa')

const { authKey } = config

module.exports = function (data, options) {

   return jwt.sign(data, authKey, options)

}