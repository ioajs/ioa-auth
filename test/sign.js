'use strict';

const test = require('jtf');
const ioa = require('../index.js');
const axios = require('axios');

const { main } = ioa;
axios.defaults.baseURL = 'http://localhost:8500';

test('/ sign', async t => {

   const options = {
      headers: {
         sign: main.sign({ uid: 1 })
      }
   }

   const { data } = await axios.get("/sign", options);

   t.deepEqual('hello ioa', data);

});


test('/ sign error', async t => {

   const options = {
      headers: {
         sign: "xxxx"
      }
   }

   const { data } = await axios.get("/sign", options);

   t.deepEqual({
      code: 402,
      error: '无效签名'
   }, data);

});