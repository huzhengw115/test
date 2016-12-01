angular.module('activity', [])

.service('activityService', function($http, $q) {
	var id = 0;
	var datas = {};
	var list = [];

	var loaddata = function() {
		var deferred = $q.defer();
		$http.get('json/information.json')
		.success( function(data) {
			datas = data.inform;
			console.log(datas);
			deferred.resolve(datas);
		})
		.error(function(err) {
			console.log('读取失败');
			deferred.reject();
		})
		return deferred.promise;
	}

	var loadMore = function() {
		var deferred = $q.defer();
		loaddata().then( function(datas) {
			list = datas;
			deferred.resolve(list);
		},function(err) {
				deferred.reject();
		})
		
		return deferred.promise;
	}

	var refresh = function() {
		var deferred = $q.defer();
		id = 0;
		loadMore().then( function(list) {
			console.log(list);
			deferred.resolve(list);
		}, function(err) {
			deferred.reject();
		});

		return deferred.promise;
	}

	return {
		loadMore: loadMore,
		refresh: refresh
	}
});