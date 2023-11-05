# NgxPushLib

A package to push angular library to github. Currently under testing.

To add package to your angular library workspace, run `ng add @progalaxyelabs/ngx-push-lib` in your workspace root folder.

This adds `@progalaxyelabs/ngx-push-lib` package to your workspace's package.json

After you build your library using `ng build <lib-project>`, run `ng deploy` in your workspace root folder. This will push the generated lib in dist folder to github repo using the same credentials



This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Code scaffolding

Run `ng generate component component-name --project ngx-push-lib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-push-lib`.
> Note: Don't forget to add `--project ngx-push-lib` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-push-lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-push-lib`, go to the dist folder `cd dist/ngx-push-lib` and run `npm publish`.

## Running unit tests

Run `ng test ngx-push-lib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
