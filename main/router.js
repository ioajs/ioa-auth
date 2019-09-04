'use strict';

const { router, middleware } = require('@app')

const { verify } = middleware;

router.get('/strict', verify, 'home.index');