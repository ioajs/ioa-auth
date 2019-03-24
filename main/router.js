'use strict';

const { apps, router } = require('@app');

const { auth, role } = apps.app.middleware;

router.get('/auth', auth, 'home.auth');

router.get('/', role('admin', 'user'), 'home.index');

router.post('/login', auth.loose, 'home.login');

router.get('/sms/:id', auth, 'home.sms');

router.get('/sms/:id/sd/:kk', role('admin', 'user'), 'home.sms');

router.post('/sms/:id/sd/:kk', role('admin', 'user'), 'home.sms');

////////// REST路由 ////////////

// 模糊匹配路由，泛解析，通用模型控制器
router.resources('/rest/:name', role('user'), 'rest');