var module_estimatetime = angular.module('module_estimatetime',[]);


/* Controllers */
module_estimatetime.controller('estimatetimeCrtl',['$scope','estimatetimeFac','highchartFac',estimatetimeCrtl]);
function estimatetimeCrtl($scope,estimatetimeFac,highchartFac){
	$scope.version='0.001';
	
	highchartFac.doGreet();
	
	estimatetimeFac.getEstByStation('RICH').success(function(data){
		$scope.location=data;
	}).then(function(){console.log($scope.location);});

	
	
	$('#count').highcharts(
		{chart: {
				zoomType: 'xy'
		},
		title: {
				text: 'Average Monthly Temperature and Rainfall in Tokyo'
		},
		subtitle: {
				text: 'Source: WorldClimate.com'
		},
		xAxis: [{
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				crosshair: true
		}],
		yAxis: [{ // Primary yAxis
				labels: {
						format: '{value}°C',
						style: {
								color: Highcharts.getOptions().colors[1]
						}
				},
				title: {
						text: 'Temperature',
						style: {
								color: Highcharts.getOptions().colors[1]
						}
				}
		}, { // Secondary yAxis
				title: {
						text: 'Rainfall',
						style: {
								color: Highcharts.getOptions().colors[0]
						}
				},
				labels: {
						format: '{value} mm',
						style: {
								color: Highcharts.getOptions().colors[0]
						}
				},
				opposite: true
		}],
		tooltip: {
				shared: true
		},
		legend: {
				layout: 'vertical',
				align: 'left',
				x: 120,
				verticalAlign: 'top',
				y: 100,
				floating: true,
				backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
		},
		series: [{
				name: 'Rainfall',
				type: 'column',
				yAxis: 1,
				data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
				tooltip: {
						valueSuffix: ' mm'
				}

		}, {
				name: 'Temperature',
				type: 'spline',
				data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
				tooltip: {
						valueSuffix: '°C'
				}
		}]
		});
	
	
	
}


/*Model*/
module_estimatetime.factory('estimatetimeFac',['$http',estimatetimeFac]);
function estimatetimeFac($http){
	var factory={};
	var baseurl='http://api.bart.gov/api/etd.aspx?cmd=etd&key=MW9S-E7SL-26DU-VV8V&orig=';

	//function getEstByStation: giving url, return json
	factory.getEstByUrl = function(url){
		return $http.get(url,
			{transformResponse:function(data){var x2js = new X2JS();var json = x2js.xml_str2json(data);return json;}});
	}
	
	
	factory.getEstByStation = function(station){
		return $http.get(baseurl+station,
			{transformResponse:function(data){var x2js = new X2JS();var json = x2js.xml_str2json(data);return json;}});
	}
	
	return factory;
}



/*Model*/
module_estimatetime.factory('highchartFac',highchartFac);
function highchartFac(){
	var factory={};
	
	factory.doGreet = function(){
		var container=angular.element(count).html();
		
//		angular.element(count).highcharts({
//			chart: {
//				zoomType: 'xy'
//			},
//			title: {
//				text: 'Average Monthly Temperature and Rainfall in Tokyo'
//			},
//			subtitle: {
//				text: 'Source: WorldClimate.com'
//			},
//			xAxis: [{
//				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//					'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//				crosshair: true
//			}],
//			yAxis: [{ // Primary yAxis
//				labels: {
//					format: '{value}°C',
//					style: {
//						color: Highcharts.getOptions().colors[1]
//					}
//				},
//				title: {
//					text: 'Temperature',
//					style: {
//						color: Highcharts.getOptions().colors[1]
//					}
//				}
//			}, { // Secondary yAxis
//				title: {
//					text: 'Rainfall',
//					style: {
//						color: Highcharts.getOptions().colors[0]
//					}
//				},
//				labels: {
//					format: '{value} mm',
//					style: {
//						color: Highcharts.getOptions().colors[0]
//					}
//				},
//				opposite: true
//			}],
//			tooltip: {
//				shared: true
//			},
//			legend: {
//				layout: 'vertical',
//				align: 'left',
//				x: 120,
//				verticalAlign: 'top',
//				y: 100,
//				floating: true,
//				backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
//			},
//			series: [{
//				name: 'Rainfall',
//				type: 'column',
//				yAxis: 1,
//				data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//				tooltip: {
//					valueSuffix: ' mm'
//				}
//
//			}, {
//				name: 'Temperature',
//				type: 'spline',
//				data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
//				tooltip: {
//					valueSuffix: '°C'
//				}
//			}]
//		});
	}
	return factory;
}