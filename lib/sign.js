'use strict';

const jwt = require('jsonwebtoken');
const { config } = require('@app');

const { roles } = config;

/**
 * 
 * @param {string} roleName 角色名称
 * @param {object} data 被签名的数据
 * @param {object} options 
 */
function sign(roleName, data, options) {

   const privateKey = roles[roleName];

   if (privateKey) {
      return jwt.sign(data, privateKey, options);
   } else {
      throw new Error(`${roleName}角色不存在`);
   }

}

module.exports = sign;