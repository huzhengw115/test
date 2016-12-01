angular.module('News', [])
.controller('NewsCtrl', function($scope, $ionicSlideBoxDelegate, newsService, $http, $ocLazyLoad) {
	$scope.slideIndex = 0;
    $scope.More = false;

    var newsTemplate = ['src/news/newsone.html', 'src/news/newstwo.html', 'src/news/newsthree.html'];
    $scope.newsOne = newsTemplate[0];

	//滑动下面的滑块，响应上面的tabs切换
    $scope.slideChanged = function(index) {

        console.log("index: ", index);

        if(1 == index) {
            
            console.log('1');
            $ocLazyLoad.load('src/news/newstwoCtrl.js').then( function() {
                $scope.newsTwo = newsTemplate[index];
                $scope.slideIndex = index;
            })
            
        } else if(2 == index) {
            
            console.log('2');
            $ocLazyLoad.load('src/news/newsthreeCtrl.js').then( function() {
                $scope.newsThree = newsTemplate[index];
                $scope.slideIndex = index;
            })
        } else {
            console.log('0');
            $scope.slideIndex = index;
        }
      $scope.slideIndex = index;
    };

    //点击上面的tabs切换，响应下面的滑块滑动
    $scope.activeSlide = function (index) {

        
        console.log('indextab:', index);
        
      $ionicSlideBoxDelegate.slide(index);
      //$scope.slideChanged(index);
    };

});