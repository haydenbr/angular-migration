import { Component, OnInit, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

declare var angular: angular.IAngularStatic;

@Component({
	selector: 'detail-panel',
	templateUrl: './detail-panel.component.html'
})
export class DetailPanelComponent implements OnInit {
	@Input() title: string;
	@Input() initialCollapsed: boolean;
	collapsed: boolean;

	ngOnInit() {
		this.collapsed = this.initialCollapsed;
	}

	collapse() {
		this.collapsed = !this.collapsed;
	}
}

angular.module('app').directive('detailPanel', downgradeComponent({ component: DetailPanelComponent }));
