'use strict';

const { router, middleware } = require('@app')

const { verify, role } = middleware;

router.get('/sign', verify, 'home.index');

router.get('/role', role('admin', 'user'), 'home.role');