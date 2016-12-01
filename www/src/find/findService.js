angular.module('Find', [])

.service('findService', function($http, $q) {
	var findlist = function() {

		var finds = [];
		var deferred = $q.defer();

		$http.get('json/find.json')
		.success(function(data) {
			finds = data.find;
			deferred.resolve(finds);
		})
		.error(function(err) {
			console.log('读取搜索列表失败');
			deferred.reject();
		})
		return deferred.promise;
	}

	return {
		findlist: findlist
	}
})