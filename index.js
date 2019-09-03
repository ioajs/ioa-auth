'use strict';

const ioa = require('ioa');

ioa.loader({
   "./main": {
      "enable": true,
      "components": {
         "@ioa/koa": true,
         "./lib/": true,
      },
   },
})

module.exports = ioa;