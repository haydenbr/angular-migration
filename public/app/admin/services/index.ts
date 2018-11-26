import { AdminGuard } from './admin.guard';
import { NameParserService } from './name-parser.service';

export { AdminGuard } from './admin.guard';
export { NameParserService } from './name-parser.service';

export const SERVICES = [AdminGuard, NameParserService];
