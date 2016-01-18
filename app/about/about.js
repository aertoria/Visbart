
//Declaration of this module
var module_about = angular.module('module_about',[]);

/* Controllers */
//Alternatively, to use dependent injection style,
//module_about.controller('aboutCrtl',['$scope','aboutFac',aboutCrtl]);
module_about.controller('aboutCrtl',aboutCrtl);
function aboutCrtl($scope,aboutFac){
	$scope.about_author='ethan wang';
	//Now I'm going to use this factory
	aboutFac.doGreet();
}


/* Model */
module_about.factory('aboutFac',aboutFac);
function aboutFac(){
	var factory={};
	factory.doGreet = function(){
		alert('doGreet method called!');
	}
	return factory;
}


//TO show case about directive
mvcApp.directive('helloworld',helloworldDirective);
function helloworldDirective(){
	return {
		restrict: 'AEC',
		replace: 'true',
		template: '<h3>Helloworld! Welcome to About page!!</h3>',
		link: function(scope, element, attrs){
			element.bind('click',function(){
				alert('you clicked!');
				//scope.$apply(function(){scope.color = "black";});
			});
		}
	}
}
