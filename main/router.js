'use strict';

const { router, middleware } = require('@app')

const { auth } = middleware;

router.get('/strict', auth.verify, 'home.index');

router.get('/loose', auth.verifyLoose, 'home.index');