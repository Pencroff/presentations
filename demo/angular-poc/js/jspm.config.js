System.config({
  "baseURL": "./",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.4",
    "angular-bootstrap": "github:angular-ui/bootstrap-bower@0.13.1",
    "angular-cookies": "github:angular/bower-angular-cookies@1.4.4",
    "angular-mocks": "github:angular/bower-angular-mocks@1.4.3",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.4.4",
    "angular-translate": "github:angular-translate/bower-angular-translate@2.7.2",
    "angular-translate-storage-cookie": "github:angular-translate/bower-angular-translate-storage-cookie@2.7.2",
    "angular-translate-storage-local": "github:angular-translate/bower-angular-translate-storage-local@2.7.2",
    "angular-ui-grid": "github:angular-ui/bower-ui-grid@3.0.5",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "angular-ui-select": "github:angular-ui/ui-select@0.12.1",
    "babel": "npm:babel-core@5.8.3",
    "babel-runtime": "npm:babel-runtime@5.8.3",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "core-js": "npm:core-js@0.9.18",
    "jquery": "github:components/jquery@2.1.4",
    "js-data": "github:js-data/js-data@2.3.0",
    "js-data-angular": "github:js-data/js-data-angular@3.0.0",
    "js-data-localstorage": "github:js-data/js-data-localstorage@2.1.1",
    "js-data-schema": "npm:js-data-schema@1.2.5",
    "validate": "npm:validate.js@0.8.0",
    "github:angular-translate/bower-angular-translate-storage-cookie@2.7.2": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.7.2"
    },
    "github:angular-translate/bower-angular-translate-storage-local@2.7.2": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.7.2"
    },
    "github:angular-translate/bower-angular-translate@2.7.2": {
      "angular": "github:angular/bower-angular@1.4.4"
    },
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.4"
    },
    "github:angular/bower-angular-cookies@1.4.4": {
      "angular": "github:angular/bower-angular@1.4.4"
    },
    "github:angular/bower-angular-mocks@1.4.3": {
      "angular": "github:angular/bower-angular@1.4.4"
    },
    "github:angular/bower-angular-sanitize@1.4.4": {
      "angular": "github:angular/bower-angular@1.4.4"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:babel-runtime@5.8.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:js-data-schema@1.2.5": {
      "mout": "npm:mout@0.11.0"
    },
    "npm:mout@0.11.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:validate.js@0.8.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

