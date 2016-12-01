angular.module('Find', [])
.controller('FindCtrl', function($scope, findService) {
	
	var findlist = function() {
		findService.findlist().then( function(finds) {
			$scope.find = finds;
			console.log($scope.find);
		})
	}

    $scope.fu = function() {
        //console.log($scope.selectone);
        document.getElementById("inputSelect").value=$scope.selectone;
        //console.log(document.getElementById("inputSelect").value);
    };
    
    $scope.selectone="c++";

	findlist();
});