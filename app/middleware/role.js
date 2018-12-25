'use strict'

const jwt = require('jsonwebtoken')
const { config } = require('@app')

const { authKey } = config

/**
 * 路由角色、权限验证
 */
module.exports = function (...argv) {

   return async function (ctx, next) {

      const authorization = ctx.get('authorization')

      if (authorization) {

         try {

            jwt.verify(authorization, authKey)
   
         } catch (err) {
   
            ctx.body = {
               msg: '签名无效',
               code: 1000,
            }
   
            return
   
         }
   
         const auth = jwt.decode(authorization)
   
         if (!argv.includes(auth.role)) {
   
            ctx.body = {
               code: 1000,
               msg: `角色${auth.role}不存在`,
            }
   
            return
   
         }
   
         ctx.auth = auth

      }
      
      // 游客
      else if (!argv.includes('tourist')) {

         ctx.body = {
            code: 1000,
            msg: '游客禁止访问',
         }

         return

      }

      await next()

   }

}