'use strict';

const jwt = require('jsonwebtoken');
const app = require('@app');

const { authKey } = app.config;

/**
 * 签名验证
 */
async function verify(ctx, next) {

   const authorization = ctx.get('authorization');

   if (authorization === undefined) {

      ctx.body = {
         msg: 'headers中缺少authorization签名参数',
         code: 1000,
      }

      return;

   }


   try {

      jwt.verify(authorization, authKey);

   } catch (error) {

      ctx.body = {
         msg: '签名无效',
         code: 1000,
      }

      return;

   }

   ctx.auth = jwt.decode(authorization);

   await next();

}

module.exports = verify;