'use strict'

const jwt = require('jsonwebtoken')
const { config } = require('ioa')

const { authKey } = config

/**
 * 签名验证
 */
module.exports = async function (ctx, next) {

   const authorization = ctx.get('authorization')

   if (!authorization) {

      ctx.body = {
         msg: 'headers中缺少authorization签名参数',
         code: 1000,
      }

      return

   }


   try {

      jwt.verify(authorization, authKey)

   } catch (err) {

      ctx.body = {
         msg: '签名无效',
         code: 1000,
      }

      return

   }

   ctx.auth = jwt.decode(authorization)

   await next()

}