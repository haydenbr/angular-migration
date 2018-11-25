import { AppNavComponent } from './app-nav/app-nav.component';
import { DetailPanelComponent } from './detail-panel/detail-panel.component';

export const ENTRY_COMPONENTS = [DetailPanelComponent];
export const COMPONENTS = [AppNavComponent, ...ENTRY_COMPONENTS];
