dailyStatus.controller('DailyStatusController', ['$scope', 'DailyStatusService', function ($scope,DailyStatusService) {    
    $scope.dates = DailyStatusService.getDates();
    var dates = $scope.dates;
    $scope.myDate = dates[0];
    $scope.projects = [];
    DailyStatusService.getProjects().then(function(d) {
        var arr = [];
        for(var i=0; i< d.length; i++){
            arr.push(d[i].name);
        }
        $scope.projects = arr;
    });

    DailyStatusService.getActivities().then(function(d) {
        var arr = [];
        for(var i=0; i< d.length; i++){
            arr.push(d[i].name);
        }
        $scope.activityTypes = arr;
    });


}]);