'use strict';

const { sign } = require('ioa')

class index {
   sign(ctx) {
      ctx.body = sign(ctx.request.body);
   }
   auth(ctx) {
      ctx.body = ctx.auth;
   }
   home(ctx) {
      ctx.body = 'hello ioa';
   }
   sms(ctx) {
      ctx.body = ctx.parameter;
   }
   login(ctx) {
      ctx.body = {
         type: 'login'
      };
   }
}

module.exports = index