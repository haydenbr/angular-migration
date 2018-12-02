import * as angular from 'angular';

export class DetailPanelClass {
	collapsed: any;
	initialCollapsed: any;

	$onInit() {
		this.collapsed = (this.initialCollapsed === 'true');
	}

	collapse() {
		this.collapsed = !this.collapsed;
	}
}

angular.module('app').component('detailPanel',{
    transclude: true,
    templateUrl: './detail-panel.component.html',
    bindings: {
      title: '@',
      initialCollapsed: '@collapsed'
    },
    controller: DetailPanelClass
});
