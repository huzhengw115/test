angular.module('Home', [])
.controller('HomeCtrl', function($scope, homeService, $ionicSlideBoxDelegate, $ionicLoading, $timeout, LoaderService) {
	
    var homeheadpic = function() {

        homeService.homepic().then( function(data) {
            $scope.ads = [];
            $ionicSlideBoxDelegate.$getByHandle('delegateHandler').update();
            // $ionicSlideBoxDelegate.$getByHandle('delegateHandler').loop(true);
            $scope.ads = data;
        })
    };

    var hotlist = function() {
        homeService.hot().then( function(hot) {
            $scope.hots = hot;
        })
    };

    var datalist = function() {
        homeService.refresh().then( function(datas) {
            $scope.information = datas;
        })
    }

	$scope.doRefresh = function () {
        LoaderService.show();
        homeheadpic();
        hotlist();
        datalist();
        $timeout(function() {
            LoaderService.hide();
        },1000);
	    $scope.$broadcast('scroll.refreshComplete');
    };

    
    $scope.doRefresh();

})

