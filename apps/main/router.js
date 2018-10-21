'use strict';

const app = require('ioa')

const { auth } = app.middleware

app.post('/sign', 'index.sign')

app.get('/auth', auth, 'index.auth')