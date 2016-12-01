angular.module('activity', [])
.controller('ActivityCtrl', function($scope, $http, activityService, $ionicSlideBoxDelegate, $timeout) {
	$scope.items = [];
	$scope.More = false;

    $scope.loadMore = function () {
    	activityService.loadMore().then( function(list) {
    		Array.prototype.push.apply($scope.items, list);
    		if(list.length == 0){
    			$scope.More = false;
    		}

    	})
    	.finally(function() {
	    	$scope.$broadcast('scroll.infiniteScrollComplete');
    	});
    };

    $scope.doRefresh = function () {

    	activityService.refresh().then( function(list) {
    		$scope.items = list;
    		console.log(list);
    	})
    	.finally(function() {
	    	$scope.$broadcast('scroll.refreshComplete');
	    });

        $timeout(function() {
            $scope.More = true;
        }, 1000);
    };

    $scope.doRefresh();
});