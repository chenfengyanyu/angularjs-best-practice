# angularjs best practice

##关键词语
angularjs, requires, dynamically loading controllers and views, best practice

##技术方案
>
1. 基于angularjs；
2. angular-route处理路由；
3. require处理模块依赖；
4. 异步加载controller和view；
5. 使用routeResolver和vm；
6. 整体依照业务逻辑划分，局部按照功能划分；

##项目组成
>项目主要由css，image，js，lib，view四部分组成，js部分和view部分如下：
- js
	- app
		- app.js
	- controllers
		- chat
			- chatController.js
		- circle
			- circleController.js
		- docs
			- docsController.js
	- directives
		- directive.js
	- filters
		- filter.js
	- services
		- routeResolver.js
		- service.js
	- main.js
- view 
	- chat
		- chat.html
	- circle
		- circle.html
	- docs
		- docs.html
		
##代码规范
>
1.git add README.md  
2.git commit -a -m 'update readme'  
3.git push origin dev  
4.test_service.sh  

##注意事项
> 
1.操作前要洗手；  
2.注意操作姿势；  
3.选择正确时机；  





