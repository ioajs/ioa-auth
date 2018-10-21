'use strict';

const { auth } = require('ioa')

class index {
   sign(ctx) {
      ctx.body = auth.sign(ctx.request.body);
   }
   auth(ctx) {
      ctx.body = ctx.auth;
   }
}

module.exports = index