import { Component, OnInit, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

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
