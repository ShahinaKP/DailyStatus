var dailyStatus = angular.module('DailyStatus',[]);

dailyStatus.directive('ngStatusReport', function() {
	return {
		restrict: 'EA',
    	templateUrl: 'app/views/statusReport.html',
    	link: function($scope, $element){
    		
    	}
	}
});
