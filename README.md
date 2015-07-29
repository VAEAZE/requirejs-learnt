###requirejs使用

####开篇引题

随着网站逐渐变成"互联网应用程序"，嵌入网页的**Javascript代码越来越庞大**，越来越复杂。网页越来越像桌面程序，需要一个团队**分工协作**、进度管理、单元测试等等......开发者不得不使用软件工程的方法，管理网页的业务逻辑。
**Javascript模块化**编程，已经成为一个迫切的需求。理想情况下，**开发者只需要实现核心的业务逻辑，其他都可以加载别人已经写好的模块**。
Javascript不是一种模块化编程语言，它不支持"类"（class），就不用谈论模块了。尽管通过**匿名函数自执行（返回方法）或者面向对象等**方式，使其看似模块化，但如何保证方法与调用之间的**依赖关系**是一个值得思考的问题，在这个基础上require.js诞生了

#####目的
通过此次对require.js的分享，能让大家把它应用到项目中，提高代码的复用性，使之呈现模块化编程，提高页面加载速度为以后实现前端组件库奠定基础。

#####方式方法
本次分享采取文字与事例相结合的方式，代码托管在github上，地址是

####1.为什么使用require.js(requirejs的好处)
作为命名空间；
作为命名空间使用；
异步加载js，避免阻塞，提高性能；
js通过require加载，不必写很多script
RequireJS的目标是鼓励代码的模块化，它使用了不同于传统<script>标签的脚本加载步骤。可以用它来加速、优化代码，但其主要目的还是为了代码的模块化。它鼓励在使用脚本时以module ID替代URL地址。

