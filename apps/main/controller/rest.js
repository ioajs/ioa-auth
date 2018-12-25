'use strict';

let { Controller } = require('@app')

class rest extends Controller {
   async index(ctx) {
      ctx.body = ctx.params
   }
   async details(ctx) {
      ctx.body = ctx.params
   }
   async create(ctx) {
      let body = ctx.request.body
      ctx.body = body
   }
   async update(ctx) {
      let body = ctx.request.body
      ctx.body = {
         body,
         parameter: ctx.params
      }
   }
   async destroy(ctx) {
      ctx.body = ctx.params
   }
   /**
    * 在rest中混入普通路由
    * @param {*} ctx 
    */
   async xxxx(ctx) {
      ctx.body = 'xxxx'
   }
}

module.exports = rest