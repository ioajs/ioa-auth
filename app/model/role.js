// 'use strict'

// const { Sequelize, sequelize, typea } = require('ioa')
// const { STRING, INTEGER, JSONB, BIGINT } = Sequelize

// const router = typea.schema([String])

// const group = typea.schema({
//    name: {
//       name: '模块名称，使用英文命名',
//       type: String
//    },
//    tag: {
//       name: '描述标签',
//       type: String
//    },
//    url: [String],
// })

// const model = sequelize.define('role', {
//    'name': {
//       name: '角色名称',
//       type: STRING,
//    },
//    'router': {
//       name: '路由权限',
//       type: JSONB,
//       set(value) {
//          let { error, data } = router.loose(value)
//          if (error) throw new Error(error)
//          this.setDataValue('router', data)
//       },
//    },
//    'group': {
//       name: '分组权限',
//       type: JSONB,
//       set(value) {
//          let { error, data } = group.loose(value)
//          if (error) throw new Error(error)
//          this.setDataValue('group', data)
//       },
//    },
//    'model': {
//       name: '模型权限',
//       type: JSONB,
//    }
// })


// model.role = {
//    user: {
//       find: {
//          where: ['uid'],
//       }
//    },
//    tourist: {
//       find: {
//          where: ['uid'],
//       }
//    }
// }


// // model.sync({ force: false })


// module.exports = model