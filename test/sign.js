'use strict';

const test = require('jtf');
const ioa = require('../index.js');
const axios = require('axios');

const app = ioa.components["./lib/"];
axios.defaults.baseURL = 'http://localhost:8500';

test('/strict', async t => {

   const options = {
      headers: {
         sign: app.sign({ uid: 1 })
      }
   }

   const { data } = await axios.get("/strict", options);

   t.deepEqual(data, 'hello ioa');

});

test('/loose', async t => {

   const options = {
      headers: {
         // sign: 'xxx'
      }
   }
   
   const { data } = await axios.get("/loose", options);

   t.deepEqual(data, 'hello ioa');

});