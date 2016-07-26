(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('nxTopNav', [function () {
      return {
        restrict: 'E',
        scope: {
          cssClass: '@',
          items:'=',
          activeIndex:'=',
          itemClick:'&'
        },
        template: '<div class="nx-widget-top-nav {{cssClass}}">' +
        '<div class="nx-item" ng-repeat="item in items" data-active="{{item.active}}">'+
        '<a sref="item.action" ng-click="itemClickInner(item)">{{item.text}}</a>'+
        '</div>'+
        '<b class="bar" ng-style="{width:100/items.length+\'%\',left:100*activeIndex/items.length+\'%\'}"></b>'+
        '</div>',
        link:linkFn
      };


      function linkFn(scope,el,attrs) {
        var _activeIndex=scope.activeIndex || 0;
        scope.items[_activeIndex].active=true;
        scope.itemClickInner=function(inItem) {

          scope.items.forEach(function(item,index){
            if(angular.equals(item,inItem)){
                scope.activeIndex=index;
            }
            item.active=false;
          });
          inItem.active=true;


          //delegate:
          scope.itemClick()(inItem);
        }
      }

    }]);


})();
