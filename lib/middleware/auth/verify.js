'use strict';

const app = require('@app');
const jwt = require('jsonwebtoken');

const { roles } = app.config;

/**
 * 宽松验证模式，允许authorization为空
 */
async function verify(ctx, next) {

   const { role } = ctx;

   if (role === 'public') {

      await next();

   } else {

      const roleAuthKey = roles[role];

      if (roleAuthKey) {

         const authorization = ctx.get('authorization');

         if (authorization === undefined) {
            ctx.body = {
               msg: 'headers中缺少authorization参数',
               code: 1000,
            }
            return;
         }

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

      } else {

         ctx.body = {
            msg: `${role}角色不存在`,
            code: 1000,
         }

      }

   }

}

module.exports = verify;