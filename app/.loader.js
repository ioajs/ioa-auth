'use strict';

const component = require('@app');

module.exports = {
   "sign.js": {
      level: 15,
      module(data) {
         for (const app of component.dependApps) {
            app.sign = data;
         }
         return data;
      }
   },
   "middleware": {
      level: 31,
      directory(data) {
         for (const app of component.dependApps) {
            Object.assign(app.middleware, data);
         }
         return data;
      }
   },
}