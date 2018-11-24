import { Provider } from '@angular/core';

const getCurrentIdentity = ($injector: any) => $injector.get('currentIdentity');

export const CurrentIdentityService: Provider = { provide: 'currentIdentity', useFactory: getCurrentIdentity, deps: ['$injector'] };
