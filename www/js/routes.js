angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'src/home/home.html',
          controller: 'HomeCtrl'
        }
      },
      resolve: {
                loadMyFiles: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load('src/home/homeService.js').then( function() {
                    return $ocLazyLoad.load(['src/home/homeCtrl.js', 'src/home/home.css']);
                })
        }]
            }
    })

    .state('tab.home-Detail', {
      url: '/home/:dataId',
      views: {
        'tab-home': {
          templateUrl: 'src/home/homeDetail.html',
          controller: 'HomeDetailCtrl'
        }
      },
      resolve: {
                loadMyFiles: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load('src/home/homeService.js').then( function() {
                    return $ocLazyLoad.load(['src/home/homeDetailCtrl.js', 'src/home/homeDetail.css']);
                })
              }]
            }
    })

  .state('tab.activity', {
      url: '/activity',
      views: {
        'tab-activity': {
          templateUrl: 'src/activity/activity.html',
          controller: 'ActivityCtrl'
        }
      },
      resolve: {
                loadMyFiles: ['$ocLazyLoad', function($ocLazyLoad){
                  return $ocLazyLoad.load('src/activity/activityService.js').then( function() {
                    return $ocLazyLoad.load(['src/activity/activityCtrl.js','src/activity/activity.css'])
                  })
                }]
            }
    })

    .state('tab.shop', {
      url: '/shop',
      views: {
        'tab-shop': {
          templateUrl: 'src/shop/shop.html',
          controller: 'ShopCtrl'
        }
      },
      resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load(['src/shop/shopCtrl.js'])
                }]
            }
    })

    .state('tab.news', {
      url: '/news',
      views: {
        'tab-news': {
          templateUrl: 'src/news/news.html',
          controller: 'NewsCtrl'
        }
      },
      resolve: {
                loadMyFiles: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load('src/news/newsService.js').then( function() {
                    return $ocLazyLoad.load(['src/news/newsCtrl.js', 'src/news/news.css','src/news/newsoneCtrl.js']);
                })
              }]
            }
    })

    .state('tab.mine', {
      url: '/mine',
      views: {
        'tab-mine': {
          templateUrl: 'src/mine/mine.html',
          controller: 'MineCtrl'
        }
      },
      resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load(['src/mine/mineCtrl.js'])
                }]
            }
    })

    .state('finds', {
      url: '/finds',
      abstract: true,
      templateUrl: 'src/find/finds.html'
    })

    .state('finds.find', {
      url: '/find',
      views: {
        'find': {
          templateUrl: 'src/find/find.html',
          controller: 'FindCtrl'
        }
      },
      resolve: {
                loadMyFiles: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load('src/find/findService.js').then( function() {
                    return $ocLazyLoad.load(['src/find/findCtrl.js', 'src/find/find.css']);
                })
              }]
            }
    })
;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

})