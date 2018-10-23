'use strict';

const test = require('jtf')
const { apps } = require('ioa')
const { axios } = require('./helpers')

const { auth } = apps

const user = {
   headers: { authorization: auth.sign({ role: "user" }) }
}

const admin = {
   headers: { authorization: auth.sign({ role: "admin" }) }
}

test('get /', async t => {

   const { data } = await axios.get("/", user)

   t.deepEqual('hello ioa', data)

});


test('get /sms/:id', async t => {

   let { data } = await axios.get("/sms/8", admin)

   t.deepEqual({ id: '8' }, data)

});


test('get /sms/:id/sd/:kk', async t => {

   let { data } = await axios.get("/sms/666/sd/888", admin)

   t.deepEqual({ id: '666', kk: '888' }, data)

});


test('post /login', async t => {

   let { data } = await axios.post("/login")

   t.deepEqual({ type: 'login' }, data)

});


test('post /sms/:id/sd/:kk', async t => {

   let { data } = await axios.post("/sms/55/sd/66", {}, user)

   t.deepEqual({ id: "55", kk: "66" }, data)

});


test('resources get /rest/:name', async t => {

   let { data } = await axios.get("/rest/sss", user)

   t.deepEqual({ name: 'sss' }, data)

});


test('resources get /rest/:name/:id', async t => {

   let { data } = await axios.get("/rest/xx/888", user)

   t.deepEqual({ id: '888', name: 'xx' }, data)

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