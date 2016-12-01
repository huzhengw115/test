angular.module('Newsone', [])
.controller('NewsoneCtrl', function($scope, $ionicSlideBoxDelegate, newsService, $http) {
	
	$scope.More = false;

	$scope.loadMore = function () {
		console.log('上拉')
	}

	$scope.doRefresh = function() {
		console.log('下拉')
		$scope.More = true;
	}
});