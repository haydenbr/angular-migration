based on Joe Eames's [Pluralsight Course](https://www.pluralsight.com/courses/migrating-applications-angular-2)

## Migration Strategies

- just services first
- page/module at a time

### Recommendation

- start with top level/Page (single use) components (easier to check if it's broken)
- shared components are harder to migrate because you have to check all uses
- work outside in (same with services)

### Notes

#### Important Techniques

- upgrade/downgrade components
- upgrade/downgrade services

#### Migrating commonly used services

- difficult because they're used in lot of places
- http ng1 vs ng2
- stateful services can be complicated
- how to name services that are in the middle of long term migration, when both an ng1 and ng2 service need to exist for some time?
- make the consumer of the service aks for a promise. the service shouldn't care itself

#### Routing

- routing: how to maintain a default route?
- routerLink can link to/from angular2 route (component) and another ng1 or ng2 route or component but you cant go from angular
- routerLink can't go between two ng1 routes or components
- how to organize urls in route handling strategy in a nice way?

##### migrating routes

- migrate and downgrade component
- rewrite/migrate any resolvers or route guards
- move route definition from ng1 to ng2
- dont forget to add the new url to route handling strategy

##### Removing AngularJS!!!

- define default route in ng2 router
- remove urlHandlerStrategy
- remove any leftover angularjs upgrade services
- dont need to add routing components to entry components in module declaration
- remove ng-view
- get rid of any hybrid bootstrapping code in main.ts
- remove ng1 build scripts, code, and config

#### Organization

- replace services directory with providers. Provider will include services as well as other providers: guards, resolves, strategies, etc.
