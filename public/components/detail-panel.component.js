angular.module('app').component('detailPanel', {
    transclude: true,
    templateUrl: '/components/detail-panel.component.html',
    bindings: {
        title: '@',
        initialCollapsed: '@collapsed'
    },
    controller: function () {
        this.collapsed = (this.initialCollapsed === 'true');
        this.collapse = function () {
            this.collapsed = !this.collapsed;
        };
    }
});
//# sourceMappingURL=detail-panel.component.js.map