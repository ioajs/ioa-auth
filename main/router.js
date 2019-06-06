'use strict';

const { router, middleware } = require('@app');

const { auth } = middleware;

router.get('/auth', auth.verify, 'home.auth');

router.get('/', auth.role('admin', 'user'), 'home.index');

router.post('/login', auth.verifyLoose, 'home.login');

router.get('/sms/:id', auth.verify, 'home.sms');

router.get('/sms/:id/sd/:kk', auth.role('admin', 'user'), 'home.sms');

router.post('/sms/:id/sd/:kk', auth.role('admin', 'user'), 'home.sms');

////////// REST路由 ////////////

// 模糊匹配路由，泛解析，通用模型控制器
router.resources('/rest/:name', auth.role('user'), 'rest');