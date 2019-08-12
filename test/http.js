'use strict';

const test = require('jtf');
const ioa = require('ioa');
const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:8900';

ioa.loader({
   "./main": {
      "enable": true,
      "components": {
         "@ioa/koa": {
            "enable": true,
         },
         "@ioa/auth": {
            "enable": true,
         }
      },
   },
});

const { sign } = ioa.main;

const admin = {
   headers: {
      authorization: sign("admin", { uid: 1 })
   }
}

const member = {
   headers: {
      authorization: sign("member", { uid: 1 })
   }
}

test('get /auth', async t => {

   const sample = { uid: 1 }

   const result = await axios.get("/auth", {
      headers: {
         authorization: sign("admin", sample)
      }
   })

   delete result.data.iat;

   t.deepEqual(result.data, sample);

});

test('get /', async t => {

   const { data } = await axios.get("/", member)

   t.deepEqual(data, 'hello ioa')

});


test('get /sms/:id', async t => {

   const params = { id: '8' }

   const { data } = await axios.get("/sms/8", { params, ...admin })

   t.deepEqual(data, params)

});


test('get /sms/:id/sd/:kk', async t => {

   const params = { id: '666', kk: '888' }

   const { data } = await axios.get("/sms/666/sd/888", { params, ...admin })

   t.deepEqual(data, params)

});


test('post /login', async t => {

   const { data } = await axios.post("/login")

   t.deepEqual(data, { type: 'login' })

});


test('post /sms/:id/sd/:kk', async t => {

   const body = { id: "55", kk: "66" }

   const { data } = await axios.post("/sms/55/sd/66", body, member)

   t.deepEqual(data, body)

});


test('resources get /rest/:name', async t => {

   const { data } = await axios.get("/rest/sss", member)

   t.deepEqual(data, { name: 'sss' })

});


test('resources get /rest/:name/:id', async t => {

   const params = { id: '888', name: 'xx' }

   const { data } = await axios.get("/rest/xx/888", { params, ...member })

   t.deepEqual(data, params)

});


test('resources post /rest/:name', async t => {

   const body = { xx: 666 }

   const { data } = await axios.post("/rest/xx", body, member)

   t.deepEqual(data, body)

});


test('resources put /rest/:name/:id', async t => {

   const body = { sss: 888 }

   const { data } = await axios.put("/rest/xx/999", body, member)

   t.deepEqual(data, { body, parameter: { name: 'xx', id: '999' } })

});


test('resources delete /rest/:name/:id', async t => {

   const { data } = await axios.delete("/rest/kk/999", member)

   t.deepEqual(data, { name: 'kk', id: '999' })

})