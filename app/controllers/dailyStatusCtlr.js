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
        $scope.defaultProject = arr[0];
    });


    DailyStatusService.getActivities().then(function(d) {
        var arr = [];
        for(var i=0; i< d.length; i++){
            arr.push(d[i].name);
        }
        $scope.activityTypes = arr;
    });

    $scope.statusObjects = [];
    $scope.submit = function(data) {
        /*if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
        } */ 
        if(data){
            if(DailyStatusService.validateStatusForm(data)){                
                var obj = {};
                obj.date = data.date;
                obj.type = data.type;
                obj.description = data.description;
                var timeStr;
                if(data.timeMin == ""){
                    timeStr = data.timeHr +':00';
                }
                else{
                    timeStr = data.timeHr +':'+ data.timeMin;
                }
                obj.time = timeStr;
                obj.project = data.project;
                var curr = new Date; 
                obj.currentDate = curr.getDate()+'/'+(curr.getMonth()+1)+'/'+curr.getFullYear();
                obj.currentTime = curr.getHours() + ":" + curr.getMinutes() + ":" + curr.getSeconds();
                $scope.statusObjects.push(obj);
                DailyStatusService.clearFields(data);
            }
            else{
                return;
            }
        } 
        else{
            alert('No data');
        }     
    };

    



}]);