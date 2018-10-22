'use strict';

const test = require('jtf')
const { axios } = require('./helpers')


test('get /', async t => {

   const user = await axios.post("/sign", { uid: 1, role: "user" })

   const { data } = await axios.get("/", {
      headers: { authorization: user.data }
   })

   t.deepEqual('hello ioa', data)

});


test('get /sms/:id', async t => {

   const admin = await axios.post("/sign", { uid: 1, role: "admin" })

   let { data } = await axios.get("/sms/8", {
      headers: { authorization: admin.data }
   })

   t.deepEqual({ id: '8' }, data)

});


test('get /sms/:id/sd/:kk', async t => {

   const admin = await axios.post("/sign", { uid: 1, role: "admin" })

   let { data } = await axios.get("/sms/666/sd/888", {
      headers: { authorization: admin.data }
   })

   t.deepEqual({ id: '666', kk: '888' }, data)

});


test('post /login', async t => {

   const admin = await axios.post("/sign", { uid: 1, role: "admin" })

   let body = { xx: 666 }
   let { data } = await axios.post("/login", body, {
      headers: { authorization: admin.data }
   })

   t.deepEqual({ type: 'login', body }, data)

});


test('post /sms/:id/sd/:kk', async t => {

   const user = await axios.post("/sign", { uid: 1, role: "user" })

   let { data } = await axios.post("/sms/55/sd/66", {}, {
      headers: { authorization: user.data }
   })

   t.deepEqual({ id: "55", kk: "66" }, data)

});


test('resources get /rest/:name', async t => {

   const user = await axios.post("/sign", { uid: 1, role: "user" })

   let { data } = await axios.get("/rest/sss", {
      headers: { authorization: user.data }
   })

   t.deepEqual({ name: 'sss' }, data)

});


test('resources get /rest/:name/:id', async t => {

   const user = await axios.post("/sign", { uid: 1, role: "user" })

   let { data } = await axios.get("/rest/xx/888", {
      headers: { authorization: user.data }
   })

   t.deepEqual({ id: '888', name: 'xx' }, data)

});


test('resources post /rest/:name', async t => {

   const user = await axios.post("/sign", { uid: 1, role: "user" })

   let body = { xx: 666 }
   let { data } = await axios.post("/rest/xx", body, {
      headers: { authorization: user.data }
   })

   t.deepEqual(body, data)

});


test('resources put /rest/:name/:id', async t => {

   const user = await axios.post("/sign", { uid: 1, role: "user" })

   let body = { sss: 888 }
   let { data } = await axios.put("/rest/xx/999", body, {
      headers: { authorization: user.data }
   })

   t.deepEqual({ body, parameter: { name: 'xx', id: '999' } }, data)

});


test('resources delete /rest/:name/:id', async t => {

   const user = await axios.post("/sign", { uid: 1, role: "user" })

   let { data } = await axios.delete("/rest/kk/999", {
      headers: { authorization: user.data }
   })

   t.deepEqual({ name: 'kk', id: '999' }, data)

})