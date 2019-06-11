'use strict';

const jwt = require('jsonwebtoken');
const app = require('@app');

const { authKey } = app.config;

/**
 * 宽松验证模式，允许authorization为空
 */
async function verifyLoose(ctx, next) {

   const authorization = ctx.get('authorization');

   if (authorization) {

      try {

         jwt.verify(authorization, authKey);

      } catch (err) {

         ctx.body = {
            msg: '签名无效',
            code: 1000,
         }

         return;

      }

      ctx.auth = jwt.decode(authorization);

   } else {

      ctx.auth = { 'role': 'tourist' };

   }

   await next();

}

module.exports = verifyLoose;