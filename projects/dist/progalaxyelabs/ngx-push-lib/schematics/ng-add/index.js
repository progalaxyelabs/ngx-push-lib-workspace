"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ngAdd = void 0;
const utility_1 = require("@schematics/angular/utility");
function ngAdd(options) {
    // Add an import `MyLibModule` from `my-lib` to the root of the user's project.
    return (0, utility_1.addRootImport)(options.project, ({ code, external }) => code `${external('NgxPushLibModule', 'ngx-push-lib')}`);
}
exports.ngAdd = ngAdd;
//# sourceMappingURL=index.js.map