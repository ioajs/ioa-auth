'use strict';

const jwt = require('jsonwebtoken')
const { config } = require('@app')

const { authKey } = config

module.exports = function (data, options) {

   return jwt.sign(data, authKey, options)

}