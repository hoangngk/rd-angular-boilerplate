# Angular
Angular Modules are used to organize an application and consolidate components, directives and pipes into blocks of functionality
There are some aspects need to be considered in during modularization:

- Bundle size can be affected by how the modules are sliced. It can be overall bundle size or also the individual lazy loaded bundles. This impacts the loading time of your app in a browser.
- Scalability is about how it is to navigate to make changes in your code. Depending on how you slice your application, reorganization of code can be more difficult.
- Simplicity: is about how easy it is for someone in the team to understand when and where to create an Angular module
- Testability: How easy is it to test a single component? If the component is part of a large module, we may have to mock many services

There are 3 strategies
- Everything in one module
- One module per feature (Lazy loading)
- One module per component (SCAM)

Using flexibly combination of strategies 2, 3 is recommended
— core → contains all the components which need to be available when the app starts
— layouts → manage all layouts in the app (ie: sidebar layout, blank layout, ...)
— shared → contains all components/modules which are shared between the features modules
---- components → contains components which are designed module per component (Angular material is also use this inspiration). In next release (maybe in Angular v14) the component is in standalone itself (https://github.com/angular/angular/pull/42831)

— modules → contains all feature modules ([https://angular.io/guide/feature-modules](https://angular.io/guide/feature-modules)) that are loaded by using lazy loading
---- ...
---- users
--------- components → contains all internal components used in users module
--------- pages → contains all components used in users routing module

