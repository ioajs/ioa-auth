'use strict';

const { parentApps } = require('@app');

module.exports = {
   "sign.js": {
      level: 15,
      module(data) {
         for (const name in parentApps) {
            const app = parentApps[name];
            app.sign = data;
         }
         return data;
      }
   },
   "middleware": {
      level: 35,
      directory(data) {
         for (const name in parentApps) {
            const app = parentApps[name];
            Object.assign(app.middleware, data);
         }
         return data;
      }
   },
}