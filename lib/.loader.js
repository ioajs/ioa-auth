'use strict';

const app = require('@app');

module.exports = {
   "sign.js": {
      level: 15,
      module(data) {
         app.emit("sign", data);
         return data;
      }
   },
   "middleware": {
      level: 30,
      after({ data }) {
         app.emit("middleware", data);
      }
   },
}