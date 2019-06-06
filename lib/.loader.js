'use strict';

const component = require('@app');

module.exports = {
   "sign.js": {
      level: 15,
      module(data) {
         component.shared("sign", data);
         return data;
      }
   },
   "middleware": {
      level: 30,
      after(data) {
         component.shared("middleware", data);
      }
   },
}