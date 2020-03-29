'use strict';

const app = require('@app');

app.on('@ioa/config');
app.on("./lib");
app.on("@ioa/koa");

module.exports = {
   middleware: null
}