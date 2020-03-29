'use strict';

const test = require('jtf');
const ioa = require('../index.js');
const axios = require('axios');

const { main } = ioa;
axios.defaults.baseURL = 'http://localhost:8500';

test('admin', async t => {

   const options = {
      headers: {
         sign: main.sign({ id: 1, role: "admin" })
      }
   }

   const { data } = await axios.get("/role", options);

   t.deepEqual('hello role ioa', data);

});


test('user', async t => {

   const options = {
      headers: {
         sign: main.sign({ id: 1, role: "user" })
      }
   }

   const { data } = await axios.get("/role", options);

   t.deepEqual('hello role ioa', data);

});