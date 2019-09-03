'use strict';

const app = require('@app');
const jwt = require('jsonwebtoken');

const { password } = app.config;

/**
 * 宽松验证模式，允许sign为空
 * 下游中间件可根据ctx.auth是否为空来判断授权状态
 */
async function verifyLoose(ctx, next) {

   const sign = ctx.get('sign');

   if (sign) {

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

   }

   await next();

}

module.exports = verifyLoose;