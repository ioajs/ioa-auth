'use strict';

const { apps } = require('@app');

const { sign } = apps.app;

class Home {
   index(ctx) {
      ctx.body = 'hello ioa';
   }
   sign(ctx) {
      ctx.body = sign(ctx.request.body);
   }
   auth(ctx) {
      ctx.body = ctx.auth;
   }
   sms(ctx) {
      ctx.body = ctx.params;
   }
   login(ctx) {
      ctx.body = {
         type: 'login'
      };
   }
}

module.exports = Home