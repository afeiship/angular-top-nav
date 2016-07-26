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
        '<div class="nx-item" ng-repeat="item in items">'+
        '<a sref="item.action" ng-click="itemClick()(item)">{{item.text}}</a>'+
        '</div>'+
        '<b class="bar" ng-style="{width:100/items.length+'%',left:100*activeIndex/items.length+'%'}"></b>'+
        '</div>'
      };

    }]);


})();