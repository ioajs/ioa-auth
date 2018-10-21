## ioa-auth

基于jsonwebtoken包装的ioa签名、验签组件

<!-- 、用户级动态密钥、黑名单标记 -->

<!-- ### 动态签名

动态签名 -->


### 配置项

* authKey *String* 签名密钥，默认值：root


### 输出依赖

* app *Object* 

   * auth *Object* 

   * sign(data, options) *Function* 

      * data *Object* 需要签名的数据

      * options *Object* 签名配置项

   * middleware *Object* 

      * auth *Function* 验签中间件

* ctx *Object* 

   * auth *Object* 解签后的对象


