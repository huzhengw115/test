angular.module('Home', [])

.service('homeService', function($http, $q) {
	
	//获取列表
	/*var list = function() {
		var list = [];
		var deferred = $q.defer();

		$http.get('json/list.json')
		.success(function(data) {
			list = data.list;
			console.log(list);
			deferred.resolve(data);
		})
		.error(function(err) {
			console.log('读取列表失败');
			deferred.reject;
		})
		return deferred.promise;
	}*/

	//热门资讯的获取
	var hot = function() {
		var hot = [];
		var deferred = $q.defer();

		$http.get('json/hot.json')
		.success(function(data) {
			hot = data.hot;
			//console.log(hot);
			deferred.resolve(hot);
		})
		.error(function(err) {
			console.log('读取热门资讯失败');
			deferred.reject();
		})
		return deferred.promise;
	}

	//轮播图的图片
	var homepic = function() {

		var data = [];
		var deferred = $q.defer();

		$http.get('json/homepic.json')
		.success(function(data) {
			data = data.pic;
			//console.log(data);
			deferred.resolve(data);
		})
		.error(function(err) {
			console.log('读取轮播图失败');
			deferred.reject();
		})
		return deferred.promise;
	}

	//资讯列表
	var informat = function() {

		var information =[];
		var deferred = $q.defer();

		$http.get('json/hots.json')
		.success(function(data) {
			information = data.information;
			//console.log(information);
			deferred.resolve(information);
		})
		.error(function(err) {
			console.log('读取资讯列表失败');
			deferred.reject();
		})
		return deferred.promise;
	}

	//下拉刷新
	var refresh = function() {

	    var deferred = $q.defer();

	    informat().then( function(datas) {
        	deferred.resolve(datas);
	    }, function() {
	    	deferred.reject();
	    });

	    return deferred.promise;
	}

	var detail = function(dataId) {
		var deferred = $q.defer();

		var detaildata = [];
		$http.get('json/message.json')
		.success(function(data) {
			detaildata = data.news;
			detaildata = detaildata[dataId];
			deferred.resolve(detaildata);
		})
		.error(function(err) {
			console.log('读取分页数据失败')
			deferred.reject();
		});
		return deferred.promise;
	}

	return {
		refresh: refresh,
		homepic: homepic,
		hot: hot,
		detail: detail
	}
})