'use strict';

const { router, middleware } = require('@app');

const { auth } = middleware;

const member = (ctx, next) => {
   ctx.role = 'member';
   next();
}

const admin = (ctx, next) => {
   ctx.role = 'admin';
   next();
}

const public_ = (ctx, next) => {
   ctx.role = 'public';
   next();
}

router.get('/auth', admin, auth.verifyStrict, 'home.auth');

router.get('/', member, auth.role('admin', 'member'), 'home.index');

router.post('/login', public_, auth.verify, 'home.login');

router.get('/sms/:id', admin, auth.verifyStrict, 'home.sms');

router.get('/sms/:id/sd/:kk', admin, auth.role('admin', 'member'), 'home.sms');

router.post('/sms/:id/sd/:kk', member, auth.role('admin', 'member'), 'home.sms');

////////// REST路由 ////////////

// 模糊匹配路由，泛解析，通用模型控制器
router.resources('/rest/:name', member, auth.role('member'), 'rest');