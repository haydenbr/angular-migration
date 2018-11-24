import { Provider } from '@angular/core';

const getLocation = ($injector: any) => $injector.get('$location');

export const LocationService: Provider = { provide: '$location', useFactory: getLocation, deps: ['$injector'] };
