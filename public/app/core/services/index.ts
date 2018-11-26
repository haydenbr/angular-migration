import { LocationProvider } from './location-ng1.service';
import { MigrationUrlHandlingStrategyProvider } from './migration-url-handling.strategy';
import { ScopeProvider } from './scope.service';
import { ToastrProvider } from './toastr.service';

export { ToastrService } from './toastr.service';

export const SERVICES = [LocationProvider, ToastrProvider, MigrationUrlHandlingStrategyProvider, ScopeProvider];
