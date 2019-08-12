'use strict';

const app = require('@app');
const jwt = require('jsonwebtoken');

const { roles } = app.config;

/**
 * 支持指定角色的签名验证
 * @param  {...any} argv 包含角色的数组
 */
function role(...argv) {

   if (argv.length === 0) {
      throw new Error(`role function parameter not allowed to be null`);
   }

   return async function (ctx, next) {

      const authorization = ctx.get('authorization');

      if (authorization) {

         const roleAuthKey = roles[ctx.role];

         try {

            jwt.verify(authorization, roleAuthKey);

         } catch (err) {

            ctx.body = {
               msg: '签名无效',
               code: 1000,
            }

            return

         }

         const auth = jwt.decode(authorization);

         if (argv.includes(ctx.role) === false) {

            ctx.body = {
               code: 1000,
               msg: `角色${auth.role}不存在`,
            }

            return;

         }

         ctx.auth = auth;

      }

      await next();

   }


}

module.exports = role;