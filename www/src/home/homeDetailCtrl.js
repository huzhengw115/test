angular.module('Home', [])

.controller('HomeDetailCtrl', function($scope, $http, $stateParams, homeService, $document, $timeout, LoaderService) {

  var getdata = function(dataId) {

    var dataId = $stateParams.dataId;
    console.log(dataId);

    homeService.detail(dataId).then( function(detaildata) {
        $scope.news = detaildata;
        console.log(detaildata);

    var items = [];
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var options = {
          index: 0,
          shareEl: false,
          tapToClose: true  
      };

    function imgOnload(img, index) {
        return function() {
          // console.log("imgOnload: [index, img]", index, img);
          // 只有实际图片宽度大于250时，才需要放大图片，否则可能时图标或者无需放大的图片。
          if (img.naturalWidth > 250) {
            var item = {
              src: img.src,
              w: img.naturalWidth,
              h: img.naturalHeight
            }
            items.push(item);
    
            angular.element(img).bind("click", bindImg(index));
          }
        }
      }
    
      function bindImg(index) {
        return function() {
          console.log("bindImg: [index, items]", index, items);

          options.index = index;
          var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
          gallery.init();
          gallery.goTo(index);

        }
      }

    var databigpic = angular.element($document.find("main"));
      databigpic.ready(function() {
        var imgs = databigpic.find("img");
        console.log(imgs);

        for(var index = 0; index < imgs.length; ++index) {
          
          var img = imgs[index];
          if(img.naturalWidth == 0 && img.naturalHeight == 0) {
            // 绑定图片加载完成事件，加载完以后才能获取图片Size
            angular.element(img).bind("load", imgOnload(img, index))
          } else {
            imgOnload(img, index)();
          }
        }

      })

    })
    $timeout(function() {
            LoaderService.hide();
        },1000);
  }

  $http.get("json/list.json")
  .success(function(data) {
    $scope.list = data.list;
    console.log(data);
  })
  .error( function(err) {

  })

  LoaderService.show();
  getdata();
});
