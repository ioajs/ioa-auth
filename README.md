## ioa-auth

基于jsonwebtoken包装的ioa签名、验签组件

<!-- 、用户级动态密钥、黑名单标记 -->

<!-- ### 动态签名

动态签名 -->


### 配置项

* authKey *String* 签名密钥，默认值：root


### 输出依赖

#### app

* auth *Object* 

   * sign(data, options) *Function* 

      * data 需要签名的数据

      * options 签名配置项

* middleware *Object* 

   * auth *Function* 签名验证中间件

#### ctx

* auth 解签后的对象


