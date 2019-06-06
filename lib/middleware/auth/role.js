'use strict';

const jwt = require('jsonwebtoken');
const app = require('@app');

const { authKey } = app.config;

/**
 * 支持指定角色的签名验证
 * @param  {...any} argv 包含角色的数组
 */
function role(...argv) {

   return async function (ctx, next) {

      const authorization = ctx.get('authorization');

      if (authorization) {

         try {

            jwt.verify(authorization, authKey);

         } catch (err) {

            ctx.body = {
               msg: '签名无效',
               code: 1000,
            }

            return

         }

         const auth = jwt.decode(authorization);

         if (argv.includes(auth.role) === false) {

            ctx.body = {
               code: 1000,
               msg: `角色${auth.role}不存在`,
            }

            return;

         }

         ctx.auth = auth;

      }

      // 游客
      else if (argv.includes('tourist') === false) {

         ctx.body = {
            code: 1000,
            msg: '游客禁止访问',
         }

         return;

      }

      await next();

   }

}

module.exports = role;