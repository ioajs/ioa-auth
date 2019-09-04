'use strict';

const app = require('@app');
const jwt = require('jsonwebtoken');

const { password } = app.config;

/**
 * 签名验证，严格模式
 */
async function verify(ctx, next) {

   const sign = ctx.get('sign');

   if (!sign) {

      ctx.body = {
         code: 402,
         error: 'headers中缺少sign签名参数',
      }

      return;

   }


   try {

      jwt.verify(sign, password);

   } catch (error) {

      ctx.body = {
         code: 402,
         error: '无效签名',
      }

      return;

   }

   ctx.auth = jwt.decode(sign);

   await next();

}

module.exports = verify;