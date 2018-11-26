import { AuthService } from './auth.service';
import { CurrentIdentityService } from './current-identity.service';
import { WaitForAuthResolver } from './wait-for-auth.resolver';

export { AuthService } from './auth.service';
export { CurrentIdentityService } from './current-identity.service';
export { WaitForAuthResolver } from './wait-for-auth.resolver';

export const SERVICES = [AuthService, CurrentIdentityService, WaitForAuthResolver];
