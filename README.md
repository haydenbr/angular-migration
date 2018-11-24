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
