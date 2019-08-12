'use strict';

const jwt = require('jsonwebtoken');
const app = require('@app');

const { roles } = app.config;

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

   const roleAuthKey = roles[ctx.role];

   try {

      jwt.verify(authorization, roleAuthKey);

   } catch (err) {

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