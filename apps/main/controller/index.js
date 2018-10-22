'use strict';

const { auth } = require('ioa')

class index {
   sign(ctx) {
      ctx.body = auth.sign(ctx.request.body);
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
      let body = ctx.request.body
      ctx.body = {
         type: 'login',
         body
      };
   }
}

module.exports = index