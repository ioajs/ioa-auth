'use strict';

const app = require('@app');
const jwt = require('jsonwebtoken');

const { password } = app.config;

module.exports = function (...roles) {

   return async function (ctx, next) {

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

      const auth = jwt.decode(sign);

      const { role } = auth;

      if (roles.includes(role)) {

         ctx.auth = auth;

         await next();

      } else {

         ctx.body = {
            code: 1000,
            error: `无${role}角色操作权限`
         }

      }
   }
   
} 