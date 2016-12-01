angular.module('starter.services', [])

.factory('LoaderService', function($rootScope, $ionicLoading) {
    return {
        show : function() {

            $rootScope.loading = $ionicLoading.show({
                //content: '<i class="icon-ion-dog"></i>',
                template: '<i class="icon-ion-big-dog" style="font-size: 50px">玩命加载中...</i>',
                animation: 'fade-in',
                showBackdrop: true,
                minWidth: 200,
                showDelay: 10
            });
        },

        hide : function(){
            $ionicLoading.hide();
        }
    }
});