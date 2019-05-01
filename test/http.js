'use strict';

const test = require('jtf');
const ioa = require('ioa');
const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:8900';

ioa.loader({
   "./main": {
      "enable": true,
      "components": {
         "@ioa/http": {
            "enable": true,
         },
         "./": {
            "enable": true,
         }
      },
   },
});

const { main } = ioa;

const { sign } = main;

const user = {
   headers: { authorization: sign({ role: "user" }) }
}

const admin = {
   headers: { authorization: sign({ role: "admin" }) }
}

test('get /auth', async t => {

   const sample = { uid: 1, data: 666 }

   let result = await axios.get("/auth", {
      headers: { authorization: sign(sample) }
   })

   delete result.data.iat;

   t.deepEqual(sample, result.data)

});

test('get /', async t => {

   const { data } = await axios.get("/", user)

   t.deepEqual('hello ioa', data)

});


test('get /sms/:id', async t => {

   let params = { id: '8' }

   let { data } = await axios.get("/sms/8", { params, ...admin })

   t.deepEqual(params, data)

});


test('get /sms/:id/sd/:kk', async t => {

   let params = { id: '666', kk: '888' }

   let { data } = await axios.get("/sms/666/sd/888", { params, ...admin })

   t.deepEqual(params, data)

});


test('post /login', async t => {

   let { data } = await axios.post("/login")

   t.deepEqual({ type: 'login' }, data)

});


test('post /sms/:id/sd/:kk', async t => {

   let body = { id: "55", kk: "66" }

   let { data } = await axios.post("/sms/55/sd/66", body, user)

   t.deepEqual(body, data)

});


test('resources get /rest/:name', async t => {

   let { data } = await axios.get("/rest/sss", user)

   t.deepEqual({ name: 'sss' }, data)

});


test('resources get /rest/:name/:id', async t => {

   let params = { id: '888', name: 'xx' }

   let { data } = await axios.get("/rest/xx/888", { params, ...user })

   t.deepEqual(params, data)

});


test('resources post /rest/:name', async t => {

   let body = { xx: 666 }

   let { data } = await axios.post("/rest/xx", body, user)

   t.deepEqual(body, data)

});


test('resources put /rest/:name/:id', async t => {

   let body = { sss: 888 }

   let { data } = await axios.put("/rest/xx/999", body, user)

   t.deepEqual({ body, parameter: { name: 'xx', id: '999' } }, data)

});


test('resources delete /rest/:name/:id', async t => {

   let { data } = await axios.delete("/rest/kk/999", user)

   t.deepEqual({ name: 'kk', id: '999' }, data)

})