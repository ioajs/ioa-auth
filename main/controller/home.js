'use strict';

class home {
   index(ctx) {
      ctx.body = 'hello ioa';
   }
   role(ctx){
      ctx.body = 'hello role ioa';
   }
}

module.exports = home;