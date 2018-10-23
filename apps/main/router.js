'use strict';

const app = require('ioa')

const { auth, role } = app.middleware

app.get('/auth', auth, 'index.auth')

app.get('/', role('admin', 'user'), 'index.home')

app.post('/login', auth.loose, 'index.login')

app.get('/sms/:id', auth, 'index.sms')

app.get('/sms/:id/sd/:kk', role('admin', 'user'), 'index.sms')

app.post('/sms/:id/sd/:kk', role('admin', 'user'), 'index.sms')

////////// REST路由 ////////////

// 模糊匹配路由，泛解析，通用模型控制器
app.resources('/rest/:name', role('user'), 'rest')