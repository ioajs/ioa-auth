'use strict';

const test = require('jtf')
const { axios } = require('./helpers')

const sample = { uid: 1, data: 666 }

test('sign、auth', async t => {

   let sign = await axios.post("/sign", sample)

   let auth = await axios.get("/auth", {
      headers: {
         authorization: sign.data
      }
   })

   delete auth.data.iat;

   t.deepEqual(sample, auth.data)

});