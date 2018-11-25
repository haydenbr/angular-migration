import { Provider } from '@angular/core';

export const getToastr = ($injector: any) => $injector.get('toastr');

export interface ToastrService {
	success: (msg: string, title?: string) => void;
	info: (msg: string, title?: string) => void;
	warning: (msg: string, title?: string) => void;
	error: (msg: string, title?: string) => void;
}

export const ToastrProvider: Provider = { provide: 'toastr', useFactory: getToastr, deps: ['$injector'] };
