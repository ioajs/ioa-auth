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
         msg: 'headers中缺少sign签名参数',
         code: 1000,
      }

      return;

   }


   try {

      jwt.verify(sign, password);

   } catch (error) {

      ctx.body = {
         msg: '签名无效',
         code: 1000,
      }

      return;

   }

   ctx.auth = jwt.decode(sign);

   await next();

}

module.exports = verify;