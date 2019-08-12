## ioa-auth

基于jsonwebtoken包装的ioa签名、验签、角色、权限控制组件

### 特性

* 支持动态生成多个密钥，不再需要人工设置密钥

* 为每个密钥建立关联id，而不是尝试匹配多个密钥

* 支持动态密钥过期删除

* 支持用户级签名，为每个用户混入私有密钥

* 支持签名黑名单

* 支持单路由、多路由角色、权限管理


### Install

```
npm install ioa-auth
```

### 配置项

* roles *Object* 包含多个角色的对象
* roles.$name *String* 签名密钥


### 组件输出依赖

* app *Object* 

   * sign(data, options) *Function* 

      * data *Object* 需要签名的数据

      * options *Object* 签名配置项

   * middleware *Object* 

      * auth *Object* 
      
         * verify *Function* 验签、解码中间件（宽松模式，authorization参数允许为空）

         * verifyStrict  *Function* 验签、解码中间件（严格模式，authorization参数不能为空）

         * role *Function* 包含角色的验签中间件
      
* ctx *Object* 

   * role *String* 权限名称

   * auth *Object* 解签后的对象