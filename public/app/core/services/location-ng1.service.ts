import { Provider } from '@angular/core';

const getLocation = ($injector: any) => $injector.get('$location');

export const LocationProvider: Provider = { provide: '$location', useFactory: getLocation, deps: ['$injector'] };
