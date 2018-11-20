import * as angular from 'angular';

angular.module('app').component('detailPanel',{
    transclude: true,
    templateUrl: './detail-panel.component.html',
    bindings: {
      title: '@',
      initialCollapsed: '@collapsed'
    },
    controller: function() {
      this.collapsed = (this.initialCollapsed === 'true');

      this.collapse = function() {
        this.collapsed = !this.collapsed;
      }
  }
});
