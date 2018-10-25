'use strict';

const { router, middleware } = require('ioa')

const { auth, role } = middleware

router.get('/auth', auth, 'index.auth')

router.get('/', role('admin', 'user'), 'index.home')

router.post('/login', auth.loose, 'index.login')

router.get('/sms/:id', auth, 'index.sms')

router.get('/sms/:id/sd/:kk', role('admin', 'user'), 'index.sms')

router.post('/sms/:id/sd/:kk', role('admin', 'user'), 'index.sms')

////////// REST路由 ////////////

// 模糊匹配路由，泛解析，通用模型控制器
router.resources('/rest/:name', role('user'), 'rest')