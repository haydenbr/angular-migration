import { Provider } from '@angular/core';

export const getScope = ($injector: any) => $injector.get('$scope');

export const ScopeProvider: Provider = { provide: '$scope', useExisting: '$rootScope' };
