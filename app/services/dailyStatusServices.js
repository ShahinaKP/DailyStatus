dailyStatus.service('DailyStatusService',['$http',
	function($http){
		return {		
			getDates: function(){
				var datesArr = [];
				var curr = new Date; // get current date
				var first = curr.getDate(); // First day is the day of the month - the day of the week
				var last = first - 6; // last day is the first day + 6

				var firstday = new Date(curr.setDate(first));
				var lastday = new Date(curr.setDate(last));

				for(var i=0; i<7; i++){
					var day = new Date(curr.setDate(first-i));
					datesArr.push(day.getDate()+'/'+(day.getMonth()+1)+'/'+day.getFullYear());
				}				
				return datesArr;
			},
				getProjects: function(){
					// $http returns a promise, which has a then function, which also returns a promise
					var promise = $http.get('assets/json/projects.json').then(function (response){
					return response.data;
				});
				return promise;	
				
			},
				getActivities: function(){
					// $http returns a promise, which has a then function, which also returns a promise
					var promise = $http.get('assets/json/activityTypes.json').then(function (response){
					return response.data;
				});
				return promise;	
				
			}
		}


}]);

