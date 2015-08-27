System.register('app.config', [], function (_export) {
  /**
   * Created by sergii.danilov on 27/07/2015.
   */
  'use strict';

  function AppConfig(componentManagerProvider) {
    componentManagerProvider.initResources();
    console.log('Config phase');
  }
  return {
    setters: [],
    execute: function () {
      _export('default', AppConfig);
    }
  };
});
System.register('app', ['angular', 'angular-sanitize', 'angular-bootstrap', 'angular-ui-router', 'angular-ui-select', 'angular-translate', 'js-data', 'js-data-angular', 'angular-ui-grid', './blocks/block.components', './components/app.components', './data/data-repository.component', './app.config', './app.run'], function (_export) {
  /**
   * Created by sergii.danilov on 27/07/2015.
   */

  /**
   * import 3rd party libs
   */

  'use strict';

  var angular, AppConfig, AppRun;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_angularSanitize) {}, function (_angularBootstrap) {}, function (_angularUiRouter) {}, function (_angularUiSelect) {}, function (_angularTranslate) {}, function (_jsData) {}, function (_jsDataAngular) {}, function (_angularUiGrid) {}, function (_blocksBlockComponents) {}, function (_componentsAppComponents) {}, function (_dataDataRepositoryComponent) {}, function (_appConfig) {
      AppConfig = _appConfig['default'];
    }, function (_appRun) {
      AppRun = _appRun['default'];
    }],
    execute: function () {

      angular.module('app', [

      /**
       *  register 3rd party libs
       */

      'js-data', 'ngSanitize', 'pascalprecht.translate', 'ui.bootstrap', 'ui.router', 'ui.select', 'ui.grid',

      /**
       *  register custom components
       */

      'block.components', 'data-repository.component', 'app.components', 'work.app.templates']).config(AppConfig).run(AppRun);
    }
  };
});
//    Needed?
//    Needed?

/**
 * import custom components
 */
System.register('app.run', ['./configuration.app'], function (_export) {
  /**
   * Created by sergii.danilov on 27/07/2015.
   */

  'use strict';

  var config;

  function AppRun() {

    console.log('Run phase');
  }
  return {
    setters: [function (_configurationApp) {
      config = _configurationApp['default'];
    }],
    execute: function () {
      _export('default', AppRun);

      AppRun.$inject = [];
    }
  };
});
System.register('configuration.app', [], function (_export) {
    /**
     * Created by sergii.danilov on 27/07/2015.
     */

    'use strict';

    return {
        setters: [],
        execute: function () {
            _export('default', {
                appName: 'Angular Seed',
                alertTimeSec: 5,
                startupPath: '/job',
                formats: {
                    date: 'DD MMM YYYY',
                    time: 'HH:mm',
                    datetime: 'DD MMM YYYY HH:mm'
                },
                angularFormats: {
                    date: 'dd MMMM yyyy',
                    time: 'HH:mm',
                    datetime: 'dd MMM yyyy HH:mm'
                },
                debugMode: true,
                dataRepository: {
                    basePath: 'http://workservices.com/api'
                }
            });
        }
    };
});
System.register('blocks/block.components', ['./modifier/modifier.component', './component-manager/component-manager.component', './title/title.component', './footer/footer.component', './control-checkbox-group/control-checkbox-group.component', './control-input/control-input.component'], function (_export) {
  /**
   * Created by sergii.danilov on 13/08/2015.
   */

  /**
   * import custom components
   */

  'use strict';

  return {
    setters: [function (_modifierModifierComponent) {}, function (_componentManagerComponentManagerComponent) {}, function (_titleTitleComponent) {}, function (_footerFooterComponent) {}, function (_controlCheckboxGroupControlCheckboxGroupComponent) {}, function (_controlInputControlInputComponent) {}],
    execute: function () {

      angular.module('block.components', [

      /**
       *  register custom components
       */

      'modifier.component', 'component-manager.component',

      /**
       *  register custom control components
       */

      'control-checkbox-group.component', 'control-input.component', 'footer.component', 'title.component']);
    }
  };
});

/**
 * import custom control components
 */
System.register('components/app.components', ['angular', './top-menu/top-menu.component', './search-panel/search-panel.component', './quote-search-header/quote-search-header.component', './quote-actions-header/quote-actions-header.component', './quote-grid/quote-grid.component', './home/home.component', './quote/quote.component', './quote-details/quote-details.component', './quote-email-modal/quote-email-modal.component', './quote-comments-panel/quote-comments-panel.component', './quote-contacts-panel/quote-contacts-panel.component', './quote-details-panel/quote-details-panel.component', './quote-documents-panel/quote-documents-panel.component', './quote-email-modal-attachments-panel/quote-email-modal-attachments-panel.component', './quote-email-modal-message-panel/quote-email-modal-message-panel.component', './quote-email-modal-recipient-panel/quote-email-modal-recipient-panel.component', './quote-items-panel/quote-items-panel.component'], function (_export) {
    /**
     * Created by graham.whelan on 10/08/2015.
     */

    /**
     * import 3rd party libs
     */

    /**
     * import custom components
     */

    'use strict';

    var angular;
    return {
        setters: [function (_angular) {
            angular = _angular['default'];
        }, function (_topMenuTopMenuComponent) {}, function (_searchPanelSearchPanelComponent) {}, function (_quoteSearchHeaderQuoteSearchHeaderComponent) {}, function (_quoteActionsHeaderQuoteActionsHeaderComponent) {}, function (_quoteGridQuoteGridComponent) {}, function (_homeHomeComponent) {}, function (_quoteQuoteComponent) {}, function (_quoteDetailsQuoteDetailsComponent) {}, function (_quoteEmailModalQuoteEmailModalComponent) {}, function (_quoteCommentsPanelQuoteCommentsPanelComponent) {}, function (_quoteContactsPanelQuoteContactsPanelComponent) {}, function (_quoteDetailsPanelQuoteDetailsPanelComponent) {}, function (_quoteDocumentsPanelQuoteDocumentsPanelComponent) {}, function (_quoteEmailModalAttachmentsPanelQuoteEmailModalAttachmentsPanelComponent) {}, function (_quoteEmailModalMessagePanelQuoteEmailModalMessagePanelComponent) {}, function (_quoteEmailModalRecipientPanelQuoteEmailModalRecipientPanelComponent) {}, function (_quoteItemsPanelQuoteItemsPanelComponent) {}],
        execute: function () {

            angular.module('app.components', [

            /**
             *  register custom components
             */
            'top-menu.component', 'search-panel.component', 'home.component', 'quote.component', 'quote-search-header.component', 'quote-actions-header.component', 'quote-grid.component', 'quote-details.component', 'quote-email-modal.component', 'quote-comments-panel.component', 'quote-contacts-panel.component', 'quote-details-panel.component', 'quote-documents-panel.component', 'quote-email-modal-attachments-panel.component', 'quote-email-modal-message-panel.component', 'quote-email-modal-recipient-panel.component', 'quote-items-panel.component']).config(function () {
                console.log('app.components config');
            }).run(function () {
                console.log('app.components run');
            });
        }
    };
});
System.register('data/data-repository.component', ['angular', 'js-data', 'js-data-localstorage', 'js-data-angular', './data-repository.provider', './dynamic/quote/quote.model', '../configuration.app'], function (_export) {
        /**
         * Created by graham.whelan on 10/08/2015.
         */

        /**
         * import 3rd party libs
         */

        /**
         * import custom exports
         */

        'use strict';

        /**
         * import custom components
         */

        var angular, dataRepositoryProvider, quoteModel, configuration;
        return {
                setters: [function (_angular) {
                        angular = _angular['default'];
                }, function (_jsData) {}, function (_jsDataLocalstorage) {}, function (_jsDataAngular) {}, function (_dataRepositoryProvider) {
                        dataRepositoryProvider = _dataRepositoryProvider['default'];
                }, function (_dynamicQuoteQuoteModel) {
                        quoteModel = _dynamicQuoteQuoteModel['default'];
                }, function (_configurationApp) {
                        configuration = _configurationApp['default'];
                }],
                execute: function () {

                        angular.module('data-repository.component', [

                        /**
                         * inject 3rd party components
                         */

                        'js-data'

                        /**
                         *  inject custom components
                         */

                        ]).provider('dataRepository', dataRepositoryProvider).config(['dataRepositoryProvider', function (dataRepositoryProvider) {
                                console.log('data-repository.component config');

                                dataRepositoryProvider.registerDataStores(configuration);

                                var dynamicRepositories = [{
                                        name: 'quote',
                                        repo: quoteModel
                                }];

                                dataRepositoryProvider.registerDynamicRepositories(dynamicRepositories);

                                var lookupRepositories = [];

                                dataRepositoryProvider.registerLookupRepositories(lookupRepositories);

                                dataRepositoryProvider.initRepositories();
                        }]);
                }
        };
});
System.register('data/data-repository.provider', ['js-data', 'js-data-localstorage', 'js-data-schema'], function (_export) {
    /**
     * Created by graham.whelan on 19/08/2015.
     */

    /**
     * import 3rd party libs
     */

    'use strict';

    var jsData, dsLocalStorageAdapter, container, localStorageAdapter, me, dataProvider;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_jsData) {
            jsData = _jsData['default'];
        }, function (_jsDataLocalstorage) {
            dsLocalStorageAdapter = _jsDataLocalstorage['default'];
        }, function (_jsDataSchema) {}],
        execute: function () {
            container = {};
            localStorageAdapter = new dsLocalStorageAdapter();
            me = undefined;

            dataProvider = (function () {
                function dataProvider() {
                    _classCallCheck(this, dataProvider);

                    me = this;
                }

                _createClass(dataProvider, [{
                    key: 'service',
                    value: function service() {
                        return {
                            getRepo: this.getRepo
                        };
                    }
                }, {
                    key: 'getRepo',
                    value: function getRepo(name) {
                        var repo = container[name];
                        if (!repo) {
                            console.warn(['data-repository-provider.js: ', name, ' is not a valid repository'].join(''));
                        }
                        return repo;
                    }
                }, {
                    key: 'initRepositories',
                    value: function initRepositories() {
                        this.initDynamicRepositories();
                        this.initLookupRepositories();
                    }
                }, {
                    key: 'initDynamicRepositories',
                    value: function initDynamicRepositories() {
                        angular.forEach(this.dynamicRepositories, function (model) {
                            var repoName = model.name.concat('.model');
                            container[repoName] = me.dynamicStore.defineResource(model.repo);
                        });
                    }
                }, {
                    key: 'initLookupRepositories',
                    value: function initLookupRepositories() {
                        angular.forEach(this.lookupRepositories, function (lookup) {
                            var repoName = lookup.name.concat('.lookup');
                            container[repoName] = me.dynamicStore.defineResource(lookup.repo);
                        });
                    }
                }, {
                    key: 'registerDataStores',
                    value: function registerDataStores(config) {
                        if (this.validateDataStoreConfig(config)) {
                            this.dynamicStore = new jsData.DS(config);
                            this.lookupStore = new jsData.DS(config);
                        } else {
                            this.dynamicStore = new jsData.DS();
                            this.lookupStore = new jsData.DS();
                        }

                        this.dynamicStore.registerAdapter('localstorage', localStorageAdapter, { 'default': true });
                        this.lookupStore.registerAdapter('localstorage', localStorageAdapter, { 'default': true });
                    }
                }, {
                    key: 'registerDynamicRepositories',
                    value: function registerDynamicRepositories(repositories) {
                        this.dynamicRepositories = repositories;
                    }
                }, {
                    key: 'registerLookupRepositories',
                    value: function registerLookupRepositories(repositories) {
                        this.lookupRepositories = repositories;
                    }
                }, {
                    key: 'validateDataStoreConfig',
                    value: function validateDataStoreConfig(config) {
                        //  Todo: implement logic to validate the config!
                        console.warn('The data store config was invalid. Reverting to the default');
                        return false;
                    }
                }, {
                    key: '$get',
                    get: function get() {
                        return this.service;
                    }
                }]);

                return dataProvider;
            })();

            dataProvider.$inject = [];

            _export('default', dataProvider);
        }
    };
});
System.register('blocks/component-manager/component-manager.component', ['angular', 'angular-ui-router', 'angular-cookies', 'angular-translate-storage-cookie', 'angular-translate-storage-local', 'angular-translate', './component-manager.provider'], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  var angular, componentManagerProvider;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_angularUiRouter) {}, function (_angularCookies) {}, function (_angularTranslateStorageCookie) {}, function (_angularTranslateStorageLocal) {}, function (_angularTranslate) {}, function (_componentManagerProvider) {
      componentManagerProvider = _componentManagerProvider['default'];
    }],
    execute: function () {

      angular.module('component-manager.component', ['ngCookies', 'pascalprecht.translate', 'ui.router']).provider('componentManager', componentManagerProvider);
    }
  };
});
System.register('blocks/component-manager/component-manager.provider', [], function (_export) {
    /**
     * Created by sergii.danilov on 17/08/2015.
     */

    /*global JSON: true, navigator: true*/

    'use strict';

    var ComponentManagerProvider;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function $getFn($translate) {
        return Object.defineProperties({}, {
            $translate: {
                get: function get() {
                    return $translate;
                },
                configurable: true,
                enumerable: true
            }
        });
    }
    return {
        setters: [],
        execute: function () {
            ComponentManagerProvider = (function () {
                function ComponentManagerProvider($stateProvider, $urlRouterProvider, $translateProvider) {
                    _classCallCheck(this, ComponentManagerProvider);

                    this.routes = [];
                    this.defaultRoutes = [];
                    this.$stateProvider = $stateProvider;
                    this.$urlRouterProvider = $urlRouterProvider;
                    this.$translateProvider = $translateProvider;
                    this.locales = {};
                }

                _createClass(ComponentManagerProvider, [{
                    key: 'initResources',
                    value: function initResources() {
                        this.initRoutes();
                        this.initLocalizations();
                    }

                    //region Routes
                }, {
                    key: 'initRoutes',
                    value: function initRoutes() {
                        var me = this;
                        angular.forEach(me.routes, function (route) {
                            me.$stateProvider.state(route.componentName, route.routeConfig);
                        });

                        this.validateDefaultRoutes();

                        if (me.defaultRoutes[0]) {
                            me.$urlRouterProvider.otherwise(me.defaultRoutes[0]);
                        }
                    }
                }, {
                    key: 'registerRoute',
                    value: function registerRoute(componentName, routeConfig) {
                        var isDefault = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

                        this.routes.push({
                            componentName: componentName,
                            routeConfig: routeConfig,
                            isDefault: isDefault
                        });

                        if (isDefault) {
                            this.defaultRoutes.push(componentName);
                        }
                    }
                }, {
                    key: 'registerMixedComponentRoute',
                    value: function registerMixedComponentRoute(componentName, routeConfig) {
                        var isDefault = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

                        var route = {
                            componentName: componentName,
                            routeConfig: {
                                url: routeConfig.url,
                                views: {}
                            }
                        };

                        angular.forEach(routeConfig.subComponents, function (subComponent) {
                            route.routeConfig.views[subComponent.name] = subComponent.config;
                        });

                        this.routes.push(route);

                        if (isDefault) {
                            this.defaultRoutes.push(componentName);
                        }
                    }
                }, {
                    key: 'registerRoutes',
                    value: function registerRoutes(routes) {
                        var me = this;
                        angular.forEach(routes, function (route) {
                            console.log(String().concat('\t Route: ', route.componentName));
                            if (route.isMixedComponent) {
                                me.registerMixedComponentRoute(route.componentName, route.routeConfig, route.isDefault);
                            } else {
                                me.registerRoute(route.componentName, route.routeConfig, route.isDefault);
                            }
                        });
                    }
                }, {
                    key: 'validateDefaultRoutes',
                    value: function validateDefaultRoutes() {
                        if (1 < this.defaultRoutes.length) {
                            console.warn(String().concat('Multiple default routes has been set. Defaulting to ', this.defaultRoutes[0]));
                        }
                    }

                    //endregion

                    //region Localizations
                }, {
                    key: 'initLocalizations',
                    value: function initLocalizations() {
                        var me = this,
                            locales = me.locales,
                            preferedLang = me.determineLanguage();
                        for (var prop in locales) {
                            if (locales.hasOwnProperty(prop)) {
                                me.$translateProvider.translations(prop, locales[prop]);
                            }
                        }
                        me.$translateProvider.preferredLanguage(preferedLang);
                        me.$translateProvider.fallbackLanguage('en');
                        me.$translateProvider.useLocalStorage();
                        me.$translateProvider.useSanitizeValueStrategy('escape');
                    }
                }, {
                    key: 'registerLocalizations',
                    value: function registerLocalizations(moduleName, locale, localizationConfig) {
                        var me = this,
                            sectionName = undefined;
                        if (!this.locales[locale]) {
                            this.locales[locale] = {
                                i18n: {}
                            };
                        }

                        sectionName = me.getSectionNameFromModuleName(moduleName);

                        this.locales[locale].i18n[sectionName] = angular.fromJson(angular.toJson(localizationConfig || {}));
                    }

                    //endregion Localizations

                    //region Common
                }, {
                    key: 'getSectionNameFromModuleName',
                    value: function getSectionNameFromModuleName() {
                        var moduleName = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

                        var index = moduleName.indexOf('.component'),
                            sectionName = moduleName;
                        if (-1 < index) {
                            sectionName = moduleName.substr(0, index);
                        }
                        sectionName = this.toCamelCase(sectionName);
                        return sectionName;
                    }
                }, {
                    key: 'toCamelCase',
                    value: function toCamelCase(str) {
                        return str.replace(/[\s|_|-](.)/g, function ($1) {
                            return $1.toUpperCase();
                        }).replace(/[\s|_|-]/g, '').replace(/^(.)/, function ($1) {
                            return $1.toUpperCase();
                        });
                    }
                }, {
                    key: 'determineLanguage',
                    value: function determineLanguage() {
                        var lang = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
                        lang = lang.substr(0, 2);
                        return lang;
                    }

                    //endregion Common
                }, {
                    key: '$get',
                    get: function get() {
                        return $getFn;
                    }
                }]);

                return ComponentManagerProvider;
            })();

            _export('default', ComponentManagerProvider);

            ComponentManagerProvider.$inject = ['$stateProvider', '$urlRouterProvider', '$translateProvider'];

            $getFn.$inject = ['$translate'];
        }
    };
});
System.register('blocks/control-checkbox-group/control-checkbox-group.component', ['angular', './control-checkbox-group.directive'], function (_export) {
  /**
   * Created by graham.whelan on 04/08/2015.
   */

  'use strict';

  var angular, controlCheckboxGroupDirective;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_controlCheckboxGroupDirective) {
      controlCheckboxGroupDirective = _controlCheckboxGroupDirective['default'];
    }],
    execute: function () {

      angular.module('control-checkbox-group.component', []).directive('fmControlCheckboxGroup', controlCheckboxGroupDirective);
    }
  };
});
System.register("blocks/control-checkbox-group/control-checkbox-group.controller", [], function (_export) {
    /**
     * Created by graham.whelan on 07/08/2015.
     */

    "use strict";

    var ControlCheckboxGroupController;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            ControlCheckboxGroupController = function ControlCheckboxGroupController() {
                _classCallCheck(this, ControlCheckboxGroupController);
            };

            ControlCheckboxGroupController.$inject = [];

            _export("default", ControlCheckboxGroupController);
        }
    };
});
System.register('blocks/control-checkbox-group/control-checkbox-group.directive', ['./control-checkbox-group.controller'], function (_export) {
    /**
     * Created by graham.whelan on 07/08/2015.
     */

    /**
     *   Usage:
     *   <fm-control-checkbox-group  label="ctrl.myLabel"
     *                               checkbox-options="ctrl.myCheckboxOptions">
     *   </fm-control-checkbox-group>
     */

    'use strict';

    var ControlCheckboxGroupController, ControlCheckboxGroup;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function controlCheckboxGroupDirective() {
        return new ControlCheckboxGroup();
    }

    return {
        setters: [function (_controlCheckboxGroupController) {
            ControlCheckboxGroupController = _controlCheckboxGroupController['default'];
        }],
        execute: function () {
            ControlCheckboxGroup = function ControlCheckboxGroup() {
                _classCallCheck(this, ControlCheckboxGroup);

                return {
                    bindToController: {
                        label: '@',
                        checkboxOptions: '='
                    },
                    controllerAs: 'controlCheckboxGroup',
                    controller: ControlCheckboxGroupController,
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'blocks/control-checkbox-group/control-checkbox-group.template.html'
                };
            };

            controlCheckboxGroupDirective.$inject = [];

            _export('default', controlCheckboxGroupDirective);
        }
    };
});
System.register('blocks/control-input/control-input.component', ['angular', './control-input.directive'], function (_export) {
  /**
   * Created by graham.whelan on 04/08/2015.
   */

  'use strict';

  var angular, controlInputDirective;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_controlInputDirective) {
      controlInputDirective = _controlInputDirective['default'];
    }],
    execute: function () {

      angular.module('control-input.component', []).directive('fmControlInput', controlInputDirective);
    }
  };
});
System.register("blocks/control-input/control-input.controller", [], function (_export) {
    /**
     * Created by graham.whelan on 07/08/2015.
     */

    "use strict";

    var ControlInputController;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            ControlInputController = function ControlInputController() {
                _classCallCheck(this, ControlInputController);
            };

            ControlInputController.$inject = [];

            _export("default", ControlInputController);
        }
    };
});
System.register('blocks/control-input/control-input.directive', ['./control-input.controller'], function (_export) {
    /**
     * Created by graham.whelan on 07/08/2015.
     */

    /**
     *   Usage:
     *   <fm-control-input  label="ctrl.myLabel"
     *                      model="ctrl.myModel">
     *   </fm-control-input>
     */

    'use strict';

    var ControlInputController, ControlInput;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function controlInputDirective() {
        return new ControlInput();
    }

    return {
        setters: [function (_controlInputController) {
            ControlInputController = _controlInputController['default'];
        }],
        execute: function () {
            ControlInput = function ControlInput() {
                _classCallCheck(this, ControlInput);

                return {
                    bindToController: {
                        label: '@',
                        model: '='
                    },
                    controllerAs: 'controlInput',
                    controller: ControlInputController,
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'blocks/control-input/control-input.template.html'
                };
            };

            controlInputDirective.$inject = [];

            _export('default', controlInputDirective);
        }
    };
});
System.register('blocks/footer/footer.component', ['angular', './footer.directive'], function (_export) {
  /**
   * Created by sergii.danilov on 04/08/2015.
   */

  'use strict';

  var angular, footerDirective;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_footerDirective) {
      footerDirective = _footerDirective['default'];
    }],
    execute: function () {

      angular.module('footer.component', []).directive('fmFooter', footerDirective);
    }
  };
});
System.register('blocks/footer/footer.controller', [], function (_export) {
    /**
     * Created by sergii.danilov on 04/08/2015.
     */

    'use strict';

    var FooterController;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            FooterController = (function () {
                function FooterController($scope) {
                    _classCallCheck(this, FooterController);

                    var vm = this;
                    vm.$scope = $scope;
                }

                _createClass(FooterController, [{
                    key: 'action',
                    value: function action() {
                        var vm = this;
                        if (vm.onAction) {
                            vm.onAction(arguments);
                        }
                    }
                }, {
                    key: 'cancel',
                    value: function cancel() {
                        var vm = this;
                        if (vm.onCancel) {
                            vm.onCancel(arguments);
                        }
                    }
                }]);

                return FooterController;
            })();

            FooterController.$inject = ['$scope'];

            _export('default', FooterController);
        }
    };
});
System.register('blocks/footer/footer.directive', ['./footer.controller'], function (_export) {
    /**
     * Created by sergii.danilov on 04/08/2015.
     */

    /**
     *   Usage:
     *  <fm-footer  class="modal-footer"
     *              action-text="Ok"
     *              on-action="ctrl.ok()"
     *              cancel-text="Cancel"
     *              on-cancel="ctrl.cancel()">
     *  </fm-footer>
     */

    'use strict';

    var FooterController, Footer;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function footerDirective() {
        return new Footer(arguments);
    }

    return {
        setters: [function (_footerController) {
            FooterController = _footerController['default'];
        }],
        execute: function () {
            Footer = function Footer() {
                _classCallCheck(this, Footer);

                return {
                    bindToController: {
                        onAction: '&',
                        actionText: '@',
                        onCancel: '&',
                        cancelText: '@'
                    },
                    controller: FooterController,
                    controllerAs: 'vm',
                    restrict: 'E',
                    replace: true,
                    scope: true,
                    templateUrl: 'blocks/footer/footer.template.html'
                };
            };

            footerDirective.$inject = [];

            _export('default', footerDirective);
        }
    };
});
System.register('blocks/modifier/modifier.component', ['angular', './modifier.directive'], function (_export) {
  /**
   * Created by sergii.danilov on 11/08/2015.
   */

  'use strict';

  var angular, modifierDirective;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_modifierDirective) {
      modifierDirective = _modifierDirective['default'];
    }],
    execute: function () {

      angular.module('modifier.component', []).directive('fmModifier', modifierDirective);
    }
  };
});
System.register('blocks/modifier/modifier.directive', [], function (_export) {
    /**
     * Created by sergii.danilov on 11/08/2015.
     */

    'use strict';

    var prefixes, levelIteration, maxLevelIteration;
    function Modifier() {
        return {
            restrict: 'A',
            link: LinkFn
        };
    }

    function LinkFn(scope, element, attr) {
        var modifier = getModifierValue(attr),
            childrenList = undefined;
        if (modifier) {
            applyModifier(element[0], modifier);
            childrenList = element.children();
            iterateChildren(childrenList, modifier);
        }
    }

    function iterateChildren(list, modifier) {
        var len = list.length,
            i = undefined,
            el = undefined,
            elChildren = undefined;
        for (i = 0; i < len; i += 1) {
            el = list[i];
            elChildren = el.children;
            applyModifier(el, modifier);
            if (0 !== elChildren.length) {
                if (maxLevelIteration < levelIteration) {
                    throw new Error('Very deep element hierarchy', 'modifier.directive');
                }
                levelIteration += 1;
                iterateChildren(elChildren, modifier);
                levelIteration -= 1;
            }
        }
    }

    function applyModifier(el, modifierArr) {
        var classStr = el.className,
            index = undefined,
            prefix = undefined,
            lastIndex = undefined,
            className = undefined,
            newClass = undefined,
            modifier = undefined,
            prefLen = undefined,
            len = undefined,
            i = undefined,
            j = undefined;
        prefLen = prefixes.length;
        for (j = 0; j < prefLen; j += 1) {
            prefix = prefixes[j];
            index = classStr.indexOf(prefix);
            if (-1 < index) {
                lastIndex = classStr.indexOf(' ', index);
                if (-1 < lastIndex) {
                    className = classStr.substring(index, lastIndex);
                } else {
                    className = classStr.substring(index);
                }
                len = modifierArr.length;
                for (i = 0; i < len; i += 1) {
                    modifier = modifierArr[i];
                    newClass = className + '--' + modifier;
                    el.className += ' ' + newClass;
                }
            }
        }
    }

    function getModifierValue(attr) {
        var modifierStr = attr.fmModifier,
            modifiersArr = undefined;
        if (modifierStr) {
            modifiersArr = modifierStr.split(' ');
        }
        return modifiersArr;
    }
    return {
        setters: [],
        execute: function () {
            Modifier.$inject = [];

            _export('default', Modifier);

            prefixes = ['fm-', 'wrk-'];
            levelIteration = 0;
            maxLevelIteration = 10;
        }
    };
});
System.register('blocks/title/title.component', ['angular', './title.directive'], function (_export) {
  /**
   * Created by graham.whelan on 04/08/2015.
   */

  'use strict';

  var angular, titleDirective;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_titleDirective) {
      titleDirective = _titleDirective['default'];
    }],
    execute: function () {

      angular.module('title.component', []).directive('fmTitle', titleDirective);
    }
  };
});
System.register("blocks/title/title.controller", [], function (_export) {
    /**
     * Created by sergii.danilov on 04/08/2015.
     */

    "use strict";

    var TitleController;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            TitleController = (function () {
                function TitleController() {
                    _classCallCheck(this, TitleController);
                }

                _createClass(TitleController, [{
                    key: "getSettings",
                    value: function getSettings() {
                        return this.settings;
                    }
                }, {
                    key: "getTitle",
                    value: function getTitle() {
                        return this.title;
                    }
                }]);

                return TitleController;
            })();

            TitleController.$inject = [];

            _export("default", TitleController);
        }
    };
});
System.register('blocks/title/title.directive', ['./title.controller'], function (_export) {
    /**
     * Created by graham.whelan on 04/08/2015.
     */

    /**
     *   Usage:
     *   <fm-title  title="ctrl.myTitle"
     *              settings="ctrl.mySettings"
     *              action="ctrl.myAction()">
     *   </fm-title>
     */

    'use strict';

    var TitleController, Title;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function titleDirective() {
        return new Title();
    }

    return {
        setters: [function (_titleController) {
            TitleController = _titleController['default'];
        }],
        execute: function () {
            Title = function Title() {
                _classCallCheck(this, Title);

                return {
                    bindToController: {
                        'title': '@',
                        'settings': '=',
                        'action': '&'
                    },
                    controller: TitleController,
                    controllerAs: 'title',
                    link: function link(scope, el, attrs, ctrl, transclude) {
                        el.find('div').find('div').append(transclude());
                    },
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'blocks/title/title.template.html',
                    transclude: true
                };
            };

            titleDirective.$inject = [];

            _export('default', titleDirective);
        }
    };
});
System.register('components/home/home.component', ['angular', './home.controller', './home.route', './lang/en', './lang/de'], function (_export) {
    /**
     * Created by sergii.danilov on 24/08/2015.
     */
    'use strict';

    var angular, HomeController, routes, enLang, deLang;
    return {
        setters: [function (_angular) {
            angular = _angular['default'];
        }, function (_homeController) {
            HomeController = _homeController['default'];
        }, function (_homeRoute) {
            routes = _homeRoute['default'];
        }, function (_langEn) {
            enLang = _langEn['default'];
        }, function (_langDe) {
            deLang = _langDe['default'];
        }],
        execute: function () {

            angular.module('home.component', []).controller('HomeController', HomeController).config(['componentManagerProvider', function (componentManagerProvider) {
                componentManagerProvider.registerRoutes(routes);
                componentManagerProvider.registerLocalizations('home.component', 'en', enLang);
                componentManagerProvider.registerLocalizations('home.component', 'de', deLang);
            }]);
        }
    };
});
System.register("components/home/home.controller", [], function (_export) {
  /**
   * Created by sergii.danilov on 24/08/2015.
   */

  "use strict";

  var HomeController;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      HomeController = function HomeController() {
        _classCallCheck(this, HomeController);
      };

      _export("default", HomeController);

      HomeController.$inject = [];
    }
  };
});
System.register('components/home/home.route', [], function (_export) {
    /**
     * Created by graham.whelan on 10/08/2015.
     */

    'use strict';

    return {
        setters: [],
        execute: function () {
            _export('default', [{
                componentName: 'home',
                routeConfig: {
                    url: '/home',
                    templateUrl: 'components/home/home.template.html',
                    controller: 'HomeController',
                    controllerAs: 'home'
                },
                isDefault: true
            }]);
        }
    };
});
System.register('components/quote/quote.component', ['angular', './quote.controller', './quote.route', './lang/en', './lang/de'], function (_export) {
  /**
   * Created by graham.whelan on 04/08/2015.
   */

  /**
   * import 3rd party libs
   */

  /**
   * import custom components
   */

  'use strict';

  /**
   * import custom configs
   */

  var angular, QuoteController, routes, enLang, deLang;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_quoteController) {
      QuoteController = _quoteController['default'];
    }, function (_quoteRoute) {
      routes = _quoteRoute['default'];
    }, function (_langEn) {
      enLang = _langEn['default'];
    }, function (_langDe) {
      deLang = _langDe['default'];
    }],
    execute: function () {

      angular.module('quote.component', []).controller('QuoteController', QuoteController).config(['componentManagerProvider', function (componentManagerProvider) {
        componentManagerProvider.registerRoutes(routes);
        componentManagerProvider.registerLocalizations('quote.component', 'en', enLang);
        componentManagerProvider.registerLocalizations('quote.component', 'de', deLang);
      }]);
    }
  };
});
System.register('components/quote/quote.controller', [], function (_export) {
    'use strict';

    var QuoteController;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            QuoteController = function QuoteController(dataRepository) {
                _classCallCheck(this, QuoteController);

                this.controlData = {};
                //  title
                this.controlData.title = 'Create New Quote';
                //  footer
                this.controlData.actionText = 'Save';
                this.controlData.cancelText = 'Cancel';
                //  control input
                this.controlData.label = 'Label';
                this.controlData.model = 'My Model';
            };

            _export('default', QuoteController);

            QuoteController.$inject = ['dataRepository'];
        }
    };
});
System.register('components/quote/quote.route', [], function (_export) {
    /**
     * Created by graham.whelan on 10/08/2015.
     */

    'use strict';

    return {
        setters: [],
        execute: function () {
            _export('default', [{
                componentName: 'quote',
                routeConfig: {
                    url: '/quote',
                    templateUrl: 'components/quote/quote.template.html',
                    controller: 'QuoteController as quote',
                    controllerAs: 'quote'
                },
                isDefault: false
            }]);
        }
    };
});
System.register('components/quote-actions-header/quote-actions-header.component', ['angular', './quote-actions-header.directive', './lang/en', './lang/de'], function (_export) {
    /**
     * Created by sergii.danilov on 25/08/2015.
     */
    'use strict';

    var angular, quoteActionHeaderDirective, enLang, deLang;
    return {
        setters: [function (_angular) {
            angular = _angular['default'];
        }, function (_quoteActionsHeaderDirective) {
            quoteActionHeaderDirective = _quoteActionsHeaderDirective['default'];
        }, function (_langEn) {
            enLang = _langEn['default'];
        }, function (_langDe) {
            deLang = _langDe['default'];
        }],
        execute: function () {

            angular.module('quote-actions-header.component', []).directive('quoteActionsHeader', quoteActionHeaderDirective).config(['componentManagerProvider', function (componentManagerProvider) {
                componentManagerProvider.registerLocalizations('quote-actions-header.component', 'en', enLang);
                componentManagerProvider.registerLocalizations('quote-actions-header.component', 'de', deLang);
            }]);
        }
    };
});
System.register('components/quote-actions-header/quote-actions-header.controller', [], function (_export) {
    /**
     * Created by sergii.danilov on 26/08/2015.
     */

    'use strict';

    var QuoteActionsHeaderController;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            QuoteActionsHeaderController = function QuoteActionsHeaderController() {
                _classCallCheck(this, QuoteActionsHeaderController);

                this.statusList = ['All', 'New', 'In Progress', 'Rejected', 'Approved'];
            };

            _export('default', QuoteActionsHeaderController);

            QuoteActionsHeaderController.$inject = [];
        }
    };
});
System.register('components/quote-actions-header/quote-actions-header.directive', ['./quote-actions-header.controller'], function (_export) {
    /**
     * Created by sergii.danilov on 26/08/2015.
     */

    'use strict';

    var QuoteActionsHeaderController, QuoteActionsHeader;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function quoteActionsHeaderDirective() {
        return new QuoteActionsHeader(arguments);
    }

    return {
        setters: [function (_quoteActionsHeaderController) {
            QuoteActionsHeaderController = _quoteActionsHeaderController['default'];
        }],
        execute: function () {
            QuoteActionsHeader = function QuoteActionsHeader() {
                _classCallCheck(this, QuoteActionsHeader);

                return {
                    bindToController: {},
                    controller: QuoteActionsHeaderController,
                    controllerAs: 'quoteActionsHeader',
                    restrict: 'E',
                    replace: true,
                    scope: true,
                    templateUrl: 'components/quote-actions-header/quote-actions-header.template.html'
                };
            };

            quoteActionsHeaderDirective.$inject = [];

            _export('default', quoteActionsHeaderDirective);
        }
    };
});
System.register('components/quote-comments-panel/quote-comments-panel.component', ['angular', './quote-comments-panel.controller', './quote-comments-panel.directive', './lang/en', './lang/de'], function (_export) {
  /**
   * Created by graham.whelan on 04/08/2015.
   */

  /**
   * import 3rd party libs
   */

  /**
   * import custom configs
   */

  /**
   * import custom components
   */

  'use strict';

  var angular, QuoteCommentsPanelController, QuoteCommentsPanelDirective, enLang, deLang;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_quoteCommentsPanelController) {
      QuoteCommentsPanelController = _quoteCommentsPanelController['default'];
    }, function (_quoteCommentsPanelDirective) {
      QuoteCommentsPanelDirective = _quoteCommentsPanelDirective['default'];
    }, function (_langEn) {
      enLang = _langEn['default'];
    }, function (_langDe) {
      deLang = _langDe['default'];
    }],
    execute: function () {

      angular.module('quote-comments-panel.component', []).controller('QuoteCommentsPanelController', QuoteCommentsPanelController).config(['componentManagerProvider', function (componentManagerProvider) {
        componentManagerProvider.registerLocalizations('quote-comments-panel.component', 'en', enLang);
        componentManagerProvider.registerLocalizations('quote-comments-panel.component', 'de', deLang);
      }]).directive('wrkQuoteCommentsPanel', QuoteCommentsPanelDirective);;
    }
  };
});
System.register("components/quote-comments-panel/quote-comments-panel.controller", [], function (_export) {
    "use strict";

    var me, QuoteCommentsPanelController;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            me = {};

            QuoteCommentsPanelController = function QuoteCommentsPanelController() {
                _classCallCheck(this, QuoteCommentsPanelController);

                me = this;
            };

            QuoteCommentsPanelController.$inject = [];

            _export("default", QuoteCommentsPanelController);
        }
    };
});
System.register('components/quote-comments-panel/quote-comments-panel.directive', ['./quote-comments-panel.controller'], function (_export) {
    /**
     * Created by graham.whelan on 04/08/2015.
     */

    /**
     *   Usage:
     *   <wrk-quote-comments-panel>
     *   </wrk-quote-comments-panel>
     */

    'use strict';

    var QuoteCommentsPanelController, QuoteCommentsPanelDirective;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function quoteCommentsPanelDirective() {
        return new QuoteCommentsPanelDirective();
    }

    return {
        setters: [function (_quoteCommentsPanelController) {
            QuoteCommentsPanelController = _quoteCommentsPanelController['default'];
        }],
        execute: function () {
            QuoteCommentsPanelDirective = function QuoteCommentsPanelDirective() {
                _classCallCheck(this, QuoteCommentsPanelDirective);

                return {
                    bindToController: {},
                    controller: QuoteCommentsPanelController,
                    controllerAs: 'quoteCommentsPanel',
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'components/quote-comments-panel/quote-comments-panel.template.html'
                };
            };

            quoteCommentsPanelDirective.$inject = [];

            _export('default', quoteCommentsPanelDirective);
        }
    };
});
System.register('components/quote-contacts-panel/quote-contacts-panel.component', ['angular', './quote-contacts-panel.controller', './quote-contacts-panel.directive', './lang/en', './lang/de'], function (_export) {
  /**
   * Created by graham.whelan on 04/08/2015.
   */

  /**
   * import 3rd party libs
   */

  /**
   * import custom configs
   */

  /**
   * import custom components
   */

  'use strict';

  var angular, QuoteContactsPanelController, QuoteContactsPanelDirective, enLang, deLang;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_quoteContactsPanelController) {
      QuoteContactsPanelController = _quoteContactsPanelController['default'];
    }, function (_quoteContactsPanelDirective) {
      QuoteContactsPanelDirective = _quoteContactsPanelDirective['default'];
    }, function (_langEn) {
      enLang = _langEn['default'];
    }, function (_langDe) {
      deLang = _langDe['default'];
    }],
    execute: function () {

      angular.module('quote-contacts-panel.component', []).controller('QuoteContactsPanelController', QuoteContactsPanelController).config(['componentManagerProvider', function (componentManagerProvider) {
        componentManagerProvider.registerLocalizations('quote-contacts-panel.component', 'en', enLang);
        componentManagerProvider.registerLocalizations('quote-contacts-panel.component', 'de', deLang);
      }]).directive('wrkQuoteContactsPanel', QuoteContactsPanelDirective);
    }
  };
});
System.register('components/quote-contacts-panel/quote-contacts-panel.controller', [], function (_export) {
    'use strict';

    var me, QuoteContactsPanelController;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            me = {};

            QuoteContactsPanelController = (function () {
                function QuoteContactsPanelController(dataRepository) {
                    _classCallCheck(this, QuoteContactsPanelController);

                    me = this;
                    this.controlData = {};

                    this.test = [];
                }

                _createClass(QuoteContactsPanelController, [{
                    key: 'filterSites',
                    value: function filterSites(site) {

                        if (me.selectedContact) {
                            me.filterCount = 0;
                            return function (item, index, array) {
                                var found = false;
                                angular.forEach(me.selectedContact.sites, function (site) {
                                    if (!found && site.id === item.id) {
                                        found = true;
                                        me.filterCount++;
                                    }
                                });
                                return found;
                            };
                        } else {
                            return function () {
                                return false;
                            };
                        }
                    }
                }, {
                    key: 'resetSelectedSite',
                    value: function resetSelectedSite() {
                        this.selectedSite = null;
                    }
                }]);

                return QuoteContactsPanelController;
            })();

            QuoteContactsPanelController.$inject = ['dataRepository'];

            _export('default', QuoteContactsPanelController);
        }
    };
});
System.register('components/quote-contacts-panel/quote-contacts-panel.directive', ['./quote-contacts-panel.controller'], function (_export) {
    /**
     * Created by graham.whelan on 04/08/2015.
     */

    /**
     *   Usage:
     *   <wrk-quote-contacts-quote-items-panel  contacts="ctrl.myContacts"
     *                              selectedContact="ctrl.mySelectedContact"
     *                              sites="ctrl.mySites"
     *                              selectedSite="ctrl.mySelectedSite">
     *   </wrk-quote-contacts-quote-items-panel>
     */

    'use strict';

    var QuoteContactsPanelController, QuoteContactsPanel;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function quoteContactsPanelDirective() {
        return new QuoteContactsPanel();
    }

    return {
        setters: [function (_quoteContactsPanelController) {
            QuoteContactsPanelController = _quoteContactsPanelController['default'];
        }],
        execute: function () {
            QuoteContactsPanel = function QuoteContactsPanel() {
                _classCallCheck(this, QuoteContactsPanel);

                return {
                    bindToController: {
                        contacts: '=',
                        selectedContact: '=',
                        sites: '=',
                        selectedSite: '='
                    },
                    controller: QuoteContactsPanelController,
                    controllerAs: 'quoteContactsPanel',
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'components/quote-contacts-panel/quote-contacts-panel.template.html'
                };
            };

            quoteContactsPanelDirective.$inject = [];

            _export('default', quoteContactsPanelDirective);
        }
    };
});
System.register('components/quote-details/quote-details.component', ['angular', './quote-details.controller', './quote-details.route', './lang/en', './lang/de'], function (_export) {
  /**
   * Created by graham.whelan on 04/08/2015.
   */

  /**
   * import 3rd party libs
   */

  /**
   * import custom components
   */

  'use strict';

  /**
   * import custom configs
   */

  var angular, QuoteDetailsController, routes, enLang, deLang;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_quoteDetailsController) {
      QuoteDetailsController = _quoteDetailsController['default'];
    }, function (_quoteDetailsRoute) {
      routes = _quoteDetailsRoute['default'];
    }, function (_langEn) {
      enLang = _langEn['default'];
    }, function (_langDe) {
      deLang = _langDe['default'];
    }],
    execute: function () {

      angular.module('quote-details.component', []).controller('QuoteDetailsController', QuoteDetailsController).config(['componentManagerProvider', function (componentManagerProvider) {
        componentManagerProvider.registerRoutes(routes);
        componentManagerProvider.registerLocalizations('quote-details.component', 'en', enLang);
        componentManagerProvider.registerLocalizations('quote-details.component', 'de', deLang);
      }]);
    }
  };
});
System.register('components/quote-details/quote-details.controller', [], function (_export) {
    'use strict';

    var me, QuoteDetailsController;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            me = {};

            QuoteDetailsController = (function () {
                function QuoteDetailsController($modal, $scope, $state, dataRepository) {
                    _classCallCheck(this, QuoteDetailsController);

                    me = this;
                    this.$modal = $modal;
                    this.$state = $state;
                    this.$scope = $scope;

                    //  check if the state to see if its the modal
                    if ('quote-email-modal' === $state.current.name) {
                        this.openModal(this.$scope);
                    }

                    //  Data for the controls
                    this.controlData = new Object();
                    this.controlData.selectedUser = {};
                    this.controlData.selectedTemplate = {};
                    this.controlData.selectedDefaultNote = {};

                    //  Mock data source
                    this.sourceData = new Object();
                    this.sourceData.users = [{ name: 'John', team: 'Alpha' }, { name: 'Joe', team: 'Alpha' }, { name: 'Jim', team: 'Bravo' }];
                    this.sourceData.quoteTemplates = [{ id: 1, name: 'Template 1' }, { id: 2, name: 'Template 2' }, { id: 3, name: 'Template 3' }];
                    this.sourceData.defaultNotes = [{ id: 1, name: 'Note 1' }, { id: 2, name: 'Note 2' }, { id: 3, name: 'Note 3' }];
                    this.sourceData.contacts = [{
                        id: 787, name: 'Bob', phone: '085220000', email: 'bob@fake.com',
                        sites: [{ id: 1001 }, { id: 1002 }]
                    }, { id: 7788, name: 'Barry', phone: '086330000', email: 'barry@fake.com',
                        sites: [{ id: 2004 }]
                    }];
                    this.sourceData.sites = [{ id: 1001, name: 'Site A', address: '123 Fake Street', accountType: '30 Days', balance: '2000', activeJobs: [] }, { id: 1002, name: 'Site B', address: '456 Upper Fake Street', accountType: '60 Days', balance: '1000', activeJobs: [] }, { id: 2004, name: 'New Site', address: '789 Lower Fake Street', accountType: '30 Days', balance: '500', activeJobs: [] }];

                    this.controlData.users = this.sourceData.users;
                    this.controlData.quoteTemplates = this.sourceData.quoteTemplates;
                    this.controlData.defaultNotes = this.sourceData.defaultNotes;
                }

                _createClass(QuoteDetailsController, [{
                    key: 'openModal',
                    value: function openModal(scope) {

                        var me = this;

                        this.modalInstance = this.$modal.open({
                            animation: true,
                            templateUrl: 'components/quote-email-modal/quote-email-modal.template.html',
                            controller: 'QuoteEmailModalController as quoteEmailModal',
                            bindToController: true,
                            size: 'lg',
                            scope: scope
                        });

                        scope.modalInstance = this.modalInstance;

                        this.modalInstance.result.then(function (newId) {
                            me.$state.go('quote-details', { quoteId: me.$state.params.quoteId });
                        }, function () {
                            me.$state.go('quote-details', { quoteId: me.$state.params.quoteId });
                        });
                    }
                }, {
                    key: 'refreshDefaultNotes',
                    value: function refreshDefaultNotes(search) {
                        var that = this;
                        this.controlData.defaultNotes = [];
                        angular.forEach(this.sourceData.defaultNotes, function (item) {
                            var lowerCaseName = item.name.toLowerCase();
                            if (-1 < lowerCaseName.indexOf(search.toLowerCase())) {
                                that.controlData.defaultNotes.push(item);
                            }
                        });
                    }
                }, {
                    key: 'refreshQuoteTemplates',
                    value: function refreshQuoteTemplates(search) {
                        var that = this;
                        this.controlData.quoteTemplates = [];
                        angular.forEach(this.sourceData.quoteTemplates, function (item) {
                            var lowerCaseName = item.name.toLowerCase();
                            if (-1 < lowerCaseName.indexOf(search.toLowerCase())) {
                                that.controlData.quoteTemplates.push(item);
                            }
                        });
                    }
                }, {
                    key: 'refreshUsers',
                    value: function refreshUsers(search) {
                        var that = this;
                        this.controlData.users = [];
                        angular.forEach(this.sourceData.users, function (item) {
                            var lowerCaseName = item.name.toLowerCase();
                            if (-1 < lowerCaseName.indexOf(search.toLowerCase())) {
                                that.controlData.users.push(item);
                            }
                        });
                    }
                }]);

                return QuoteDetailsController;
            })();

            QuoteDetailsController.$inject = ['$modal', '$scope', '$state', 'dataRepository'];

            _export('default', QuoteDetailsController);
        }
    };
});
System.register('components/quote-details/quote-details.route', [], function (_export) {
    /**
     * Created by graham.whelan on 10/08/2015.
     */

    'use strict';

    return {
        setters: [],
        execute: function () {
            _export('default', [{
                componentName: 'quote-details',
                routeConfig: {
                    url: '/quote/details/{quoteId}',
                    templateUrl: 'components/quote-details/quote-details.template.html',
                    controller: 'QuoteDetailsController',
                    controllerAs: 'quoteDetails'
                },
                isDefault: false
            }]);
        }
    };
});
System.register('components/quote-details-panel/quote-details-panel.component', ['angular', './quote-details-panel.controller', './quote-details-panel.directive', './lang/en', './lang/de'], function (_export) {
  /**
   * Created by graham.whelan on 04/08/2015.
   */

  /**
   * import 3rd party libs
   */

  /**
   * import custom configs
   */

  /**
   * import custom components
   */

  'use strict';

  var angular, QuoteDetailsPanelController, QuoteDetailsPanelDirective, enLang, deLang;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_quoteDetailsPanelController) {
      QuoteDetailsPanelController = _quoteDetailsPanelController['default'];
    }, function (_quoteDetailsPanelDirective) {
      QuoteDetailsPanelDirective = _quoteDetailsPanelDirective['default'];
    }, function (_langEn) {
      enLang = _langEn['default'];
    }, function (_langDe) {
      deLang = _langDe['default'];
    }],
    execute: function () {

      angular.module('quote-details-panel.component', []).controller('QuoteDetailsPanelController', QuoteDetailsPanelController).config(['componentManagerProvider', function (componentManagerProvider) {
        componentManagerProvider.registerLocalizations('quote-details-panel.component', 'en', enLang);
        componentManagerProvider.registerLocalizations('quote-details-panel.component', 'de', deLang);
      }]).directive('wrkQuoteDetailsPanel', QuoteDetailsPanelDirective);
    }
  };
});
System.register("components/quote-details-panel/quote-details-panel.controller", [], function (_export) {
    "use strict";

    var me, QuoteDetailsPanelController;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            me = {};

            QuoteDetailsPanelController = function QuoteDetailsPanelController() {
                _classCallCheck(this, QuoteDetailsPanelController);

                me = this;
            };

            QuoteDetailsPanelController.$inject = [];

            _export("default", QuoteDetailsPanelController);
        }
    };
});
System.register('components/quote-details-panel/quote-details-panel.directive', ['./quote-details-panel.controller'], function (_export) {
    /**
     * Created by graham.whelan on 04/08/2015.
     */

    /**
     *   Usage:
     *   <wrk-quote-details-panel>
     *   </wrk-quote-details-panel>
     */

    'use strict';

    var QuoteDetailsPanelController, QuoteDetailsPanelDirective;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function quoteDetailsPanelDirective() {
        return new QuoteDetailsPanelDirective();
    }

    return {
        setters: [function (_quoteDetailsPanelController) {
            QuoteDetailsPanelController = _quoteDetailsPanelController['default'];
        }],
        execute: function () {
            QuoteDetailsPanelDirective = function QuoteDetailsPanelDirective() {
                _classCallCheck(this, QuoteDetailsPanelDirective);

                return {
                    bindToController: {},
                    controller: QuoteDetailsPanelController,
                    controllerAs: 'quoteDetailsPanel',
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'components/quote-details-panel/quote-details-panel.template.html'
                };
            };

            quoteDetailsPanelDirective.$inject = [];

            _export('default', quoteDetailsPanelDirective);
        }
    };
});
System.register('components/quote-documents-panel/quote-documents-panel.component', ['angular', './quote-documents-panel.controller', './quote-documents-panel.directive', './lang/en', './lang/de'], function (_export) {
  /**
   * Created by graham.whelan on 04/08/2015.
   */

  /**
   * import 3rd party libs
   */

  /**
   * import custom configs
   */

  /**
   * import custom components
   */

  'use strict';

  var angular, QuoteDocumentsPanelController, QuoteDocumentsPanelDirective, enLang, deLang;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_quoteDocumentsPanelController) {
      QuoteDocumentsPanelController = _quoteDocumentsPanelController['default'];
    }, function (_quoteDocumentsPanelDirective) {
      QuoteDocumentsPanelDirective = _quoteDocumentsPanelDirective['default'];
    }, function (_langEn) {
      enLang = _langEn['default'];
    }, function (_langDe) {
      deLang = _langDe['default'];
    }],
    execute: function () {

      angular.module('quote-documents-panel.component', []).controller('QuoteDocumentsPanelController', QuoteDocumentsPanelController).config(['componentManagerProvider', function (componentManagerProvider) {
        componentManagerProvider.registerLocalizations('quote-documents-panel.component', 'en', enLang);
        componentManagerProvider.registerLocalizations('quote-documents-panel.component', 'de', deLang);
      }]).directive('wrkQuoteDocumentsPanel', QuoteDocumentsPanelDirective);
    }
  };
});
System.register("components/quote-documents-panel/quote-documents-panel.controller", [], function (_export) {
    "use strict";

    var me, QuoteDocumentsPanelController;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            me = {};

            QuoteDocumentsPanelController = function QuoteDocumentsPanelController() {
                _classCallCheck(this, QuoteDocumentsPanelController);

                me = this;
            };

            QuoteDocumentsPanelController.$inject = [];

            _export("default", QuoteDocumentsPanelController);
        }
    };
});
System.register('components/quote-documents-panel/quote-documents-panel.directive', ['./quote-documents-panel.controller'], function (_export) {
    /**
     * Created by graham.whelan on 04/08/2015.
     */

    /**
     *   Usage:
     *   <wrk-quote-documents-panel>
     *   </wrk-quote-documents-panel>
     */

    'use strict';

    var QuoteDocumentsPanelController, QuoteDocumentsPanelDirective;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function quoteDocumentsPanelDirective() {
        return new QuoteDocumentsPanelDirective();
    }

    return {
        setters: [function (_quoteDocumentsPanelController) {
            QuoteDocumentsPanelController = _quoteDocumentsPanelController['default'];
        }],
        execute: function () {
            QuoteDocumentsPanelDirective = function QuoteDocumentsPanelDirective() {
                _classCallCheck(this, QuoteDocumentsPanelDirective);

                return {
                    bindToController: {},
                    controller: QuoteDocumentsPanelController,
                    controllerAs: 'quoteDocumentsPanel',
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'components/quote-documents-panel/quote-documents-panel.template.html'
                };
            };

            quoteDocumentsPanelDirective.$inject = [];

            _export('default', quoteDocumentsPanelDirective);
        }
    };
});
System.register('components/quote-email-modal/quote-email-modal.component', ['angular', './quote-email-modal.controller', './quote-email-modal.route', './lang/en', './lang/de'], function (_export) {
  /**
   * Created by graham.whelan on 04/08/2015.
   */

  /**
   * import 3rd party libs
   */

  /**
   * import custom components
   */

  'use strict';

  /**
   * import custom configs
   */

  var angular, QuoteEmailModalController, routes, enLang, deLang;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_quoteEmailModalController) {
      QuoteEmailModalController = _quoteEmailModalController['default'];
    }, function (_quoteEmailModalRoute) {
      routes = _quoteEmailModalRoute['default'];
    }, function (_langEn) {
      enLang = _langEn['default'];
    }, function (_langDe) {
      deLang = _langDe['default'];
    }],
    execute: function () {

      angular.module('quote-email-modal.component', []).controller('QuoteEmailModalController', QuoteEmailModalController).config(['componentManagerProvider', function (componentManagerProvider) {
        componentManagerProvider.registerRoutes(routes);
        componentManagerProvider.registerLocalizations('quote-email-modal.component', 'en', enLang);
        componentManagerProvider.registerLocalizations('quote-email-modal.component', 'de', deLang);
      }]);
    }
  };
});
System.register('components/quote-email-modal/quote-email-modal.controller', [], function (_export) {
    'use strict';

    var me, QuoteEmailModalController;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            me = {};

            QuoteEmailModalController = (function () {
                function QuoteEmailModalController($scope, dataRepository) {
                    _classCallCheck(this, QuoteEmailModalController);

                    me = this;
                    this.parent = $scope.quoteDetails;
                }

                _createClass(QuoteEmailModalController, [{
                    key: 'send',
                    value: function send() {
                        this.parent.modalInstance.close();
                        console.log('Sent');
                    }
                }]);

                return QuoteEmailModalController;
            })();

            QuoteEmailModalController.$inject = ['$scope', 'dataRepository'];

            _export('default', QuoteEmailModalController);
        }
    };
});
System.register('components/quote-email-modal/quote-email-modal.route', [], function (_export) {
    /**
     * Created by graham.whelan on 10/08/2015.
     */

    'use strict';

    return {
        setters: [],
        execute: function () {
            _export('default', [{
                componentName: 'quote-email-modal',
                routeConfig: {
                    url: '/quote/details/{quoteId}/newemail',
                    templateUrl: 'components/quote-details/quote-details.template.html',
                    controller: 'QuoteDetailsController',
                    controllerAs: 'quoteDetails'
                },
                isDefault: false
            }]);
        }
    };
});
System.register('components/quote-email-modal-attachments-panel/quote-email-modal-attachments-panel.component', ['angular', './quote-email-modal-attachments-panel.controller', './quote-email-modal-attachments-panel.directive', './lang/en', './lang/de'], function (_export) {
  /**
   * Created by graham.whelan on 04/08/2015.
   */

  /**
   * import 3rd party libs
   */

  /**
   * import custom configs
   */

  /**
   * import custom components
   */

  'use strict';

  var angular, QuoteEmailModalAttachmentsPanelController, QuoteEmailModalAttachmentsPanelDirective, enLang, deLang;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_quoteEmailModalAttachmentsPanelController) {
      QuoteEmailModalAttachmentsPanelController = _quoteEmailModalAttachmentsPanelController['default'];
    }, function (_quoteEmailModalAttachmentsPanelDirective) {
      QuoteEmailModalAttachmentsPanelDirective = _quoteEmailModalAttachmentsPanelDirective['default'];
    }, function (_langEn) {
      enLang = _langEn['default'];
    }, function (_langDe) {
      deLang = _langDe['default'];
    }],
    execute: function () {

      angular.module('quote-email-modal-attachments-panel.component', []).controller('QuoteEmailModalAttachmentsPanelController', QuoteEmailModalAttachmentsPanelController).config(['componentManagerProvider', function (componentManagerProvider) {
        componentManagerProvider.registerLocalizations('quote-email-modal-attachments-panel.component', 'en', enLang);
        componentManagerProvider.registerLocalizations('quote-email-modal-attachments-panel.component', 'de', deLang);
      }]).directive('wrkQuoteEmailModalAttachmentsPanel', QuoteEmailModalAttachmentsPanelDirective);;
    }
  };
});
System.register('components/quote-email-modal-attachments-panel/quote-email-modal-attachments-panel.controller', [], function (_export) {
    'use strict';

    var me, QuoteEmailModalAttachmentsPanelController;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            me = {};

            QuoteEmailModalAttachmentsPanelController = function QuoteEmailModalAttachmentsPanelController() {
                _classCallCheck(this, QuoteEmailModalAttachmentsPanelController);

                me = this;
                this.controlData = {};

                this.controlData.checkboxOptions = [{ label: 'Quote', model: this.controlData.chk1 }, { label: 'Doc 1', model: this.controlData.chk2 }, { label: 'Doc 2', model: this.controlData.chk3 }];
            };

            QuoteEmailModalAttachmentsPanelController.$inject = [];

            _export('default', QuoteEmailModalAttachmentsPanelController);
        }
    };
});
System.register('components/quote-email-modal-attachments-panel/quote-email-modal-attachments-panel.directive', ['./quote-email-modal-attachments-panel.controller'], function (_export) {
    /**
     * Created by graham.whelan on 04/08/2015.
     */

    /**
     *   Usage:
     *   <wrk-quote-email-modal-attachments-panel>
     *   </wrk-quote-email-modal-attachments-panel>
     */

    'use strict';

    var QuoteEmailModalAttachmentsPanelController, QuoteEmailModalAttachmentsPanelDirective;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function quoteEmailModalAttachmentsPanelDirective() {
        return new QuoteEmailModalAttachmentsPanelDirective();
    }

    return {
        setters: [function (_quoteEmailModalAttachmentsPanelController) {
            QuoteEmailModalAttachmentsPanelController = _quoteEmailModalAttachmentsPanelController['default'];
        }],
        execute: function () {
            QuoteEmailModalAttachmentsPanelDirective = function QuoteEmailModalAttachmentsPanelDirective() {
                _classCallCheck(this, QuoteEmailModalAttachmentsPanelDirective);

                return {
                    bindToController: {},
                    controller: QuoteEmailModalAttachmentsPanelController,
                    controllerAs: 'quoteEmailModalAttachmentsPanel',
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'components/quote-email-modal-attachments-panel/quote-email-modal-attachments-panel.template.html'
                };
            };

            quoteEmailModalAttachmentsPanelDirective.$inject = [];

            _export('default', quoteEmailModalAttachmentsPanelDirective);
        }
    };
});
System.register('components/quote-email-modal-message-panel/quote-email-modal-message-panel.component', ['angular', './quote-email-modal-message-panel.controller', './quote-email-modal-message-panel.directive', './lang/en', './lang/de'], function (_export) {
  /**
   * Created by graham.whelan on 04/08/2015.
   */

  /**
   * import 3rd party libs
   */

  /**
   * import custom configs
   */

  /**
   * import custom components
   */

  'use strict';

  var angular, QuoteEmailModalMessagePanelController, QuoteEmailModalMessagePanelDirective, enLang, deLang;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_quoteEmailModalMessagePanelController) {
      QuoteEmailModalMessagePanelController = _quoteEmailModalMessagePanelController['default'];
    }, function (_quoteEmailModalMessagePanelDirective) {
      QuoteEmailModalMessagePanelDirective = _quoteEmailModalMessagePanelDirective['default'];
    }, function (_langEn) {
      enLang = _langEn['default'];
    }, function (_langDe) {
      deLang = _langDe['default'];
    }],
    execute: function () {

      angular.module('quote-email-modal-message-panel.component', []).controller('QuoteEmailModalMessagePanelController', QuoteEmailModalMessagePanelController).config(['componentManagerProvider', function (componentManagerProvider) {
        componentManagerProvider.registerLocalizations('quote-email-modal-message-panel.component', 'en', enLang);
        componentManagerProvider.registerLocalizations('quote-email-modal-message-panel.component', 'de', deLang);
      }]).directive('wrkQuoteEmailModalMessagePanel', QuoteEmailModalMessagePanelDirective);;
    }
  };
});
System.register("components/quote-email-modal-message-panel/quote-email-modal-message-panel.controller", [], function (_export) {
    "use strict";

    var me, QuoteEmailModalMessagePanelController;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            me = {};

            QuoteEmailModalMessagePanelController = function QuoteEmailModalMessagePanelController() {
                _classCallCheck(this, QuoteEmailModalMessagePanelController);

                me = this;
            };

            QuoteEmailModalMessagePanelController.$inject = [];

            _export("default", QuoteEmailModalMessagePanelController);
        }
    };
});
System.register('components/quote-email-modal-message-panel/quote-email-modal-message-panel.directive', ['./quote-email-modal-message-panel.controller'], function (_export) {
    /**
     * Created by graham.whelan on 04/08/2015.
     */

    /**
     *   Usage:
     *   <wrk-quote-email-modal-message-panel>
     *   </wrk-quote-email-modal-message-panel>
     */

    'use strict';

    var QuoteEmailModalMessagePanelController, QuoteEmailModalMessagePanelDirective;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function quoteEmailModalMessagePanelDirective() {
        return new QuoteEmailModalMessagePanelDirective();
    }

    return {
        setters: [function (_quoteEmailModalMessagePanelController) {
            QuoteEmailModalMessagePanelController = _quoteEmailModalMessagePanelController['default'];
        }],
        execute: function () {
            QuoteEmailModalMessagePanelDirective = function QuoteEmailModalMessagePanelDirective() {
                _classCallCheck(this, QuoteEmailModalMessagePanelDirective);

                return {
                    bindToController: {},
                    controller: QuoteEmailModalMessagePanelController,
                    controllerAs: 'quoteEmailModalMessagePanel',
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'components/quote-email-modal-message-panel/quote-email-modal-message-panel.template.html'
                };
            };

            quoteEmailModalMessagePanelDirective.$inject = [];

            _export('default', quoteEmailModalMessagePanelDirective);
        }
    };
});
System.register('components/quote-email-modal-recipient-panel/quote-email-modal-recipient-panel.component', ['angular', './quote-email-modal-recipient-panel.controller', './quote-email-modal-recipient-panel.directive', './lang/en', './lang/de'], function (_export) {
  /**
   * Created by graham.whelan on 04/08/2015.
   */

  /**
   * import 3rd party libs
   */

  /**
   * import custom configs
   */

  /**
   * import custom components
   */

  'use strict';

  var angular, QuoteEmailModalRecipientPanelController, QuoteEmailModalRecipientPanelDirective, enLang, deLang;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_quoteEmailModalRecipientPanelController) {
      QuoteEmailModalRecipientPanelController = _quoteEmailModalRecipientPanelController['default'];
    }, function (_quoteEmailModalRecipientPanelDirective) {
      QuoteEmailModalRecipientPanelDirective = _quoteEmailModalRecipientPanelDirective['default'];
    }, function (_langEn) {
      enLang = _langEn['default'];
    }, function (_langDe) {
      deLang = _langDe['default'];
    }],
    execute: function () {

      angular.module('quote-email-modal-recipient-panel.component', []).controller('QuoteEmailModalRecipientPanelController', QuoteEmailModalRecipientPanelController).config(['componentManagerProvider', function (componentManagerProvider) {
        componentManagerProvider.registerLocalizations('quote-email-modal-recipient-panel.component', 'en', enLang);
        componentManagerProvider.registerLocalizations('quote-email-modal-recipient-panel.component', 'de', deLang);
      }]).directive('wrkQuoteEmailModalRecipientPanel', QuoteEmailModalRecipientPanelDirective);;
    }
  };
});
System.register("components/quote-email-modal-recipient-panel/quote-email-modal-recipient-panel.controller", [], function (_export) {
    "use strict";

    var me, QuoteEmailModalRecipientPanelController;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            me = {};

            QuoteEmailModalRecipientPanelController = function QuoteEmailModalRecipientPanelController() {
                _classCallCheck(this, QuoteEmailModalRecipientPanelController);

                me = this;
            };

            QuoteEmailModalRecipientPanelController.$inject = [];

            _export("default", QuoteEmailModalRecipientPanelController);
        }
    };
});
System.register('components/quote-email-modal-recipient-panel/quote-email-modal-recipient-panel.directive', ['./quote-email-modal-recipient-panel.controller'], function (_export) {
    /**
     * Created by graham.whelan on 04/08/2015.
     */

    /**
     *   Usage:
     *   <wrk-quote-email-modal-recipient-panel>
     *   </wrk-quote-email-modal-recipient-panel>
     */

    'use strict';

    var QuoteEmailModalRecipientPanelController, QuoteEmailModalRecipientPanelDirective;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function quoteEmailModalRecipientPanelDirective() {
        return new QuoteEmailModalRecipientPanelDirective();
    }

    return {
        setters: [function (_quoteEmailModalRecipientPanelController) {
            QuoteEmailModalRecipientPanelController = _quoteEmailModalRecipientPanelController['default'];
        }],
        execute: function () {
            QuoteEmailModalRecipientPanelDirective = function QuoteEmailModalRecipientPanelDirective() {
                _classCallCheck(this, QuoteEmailModalRecipientPanelDirective);

                return {
                    bindToController: {},
                    controller: QuoteEmailModalRecipientPanelController,
                    controllerAs: 'quoteEmailModalRecipientPanel',
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'components/quote-email-modal-recipient-panel/quote-email-modal-recipient-panel.template.html'
                };
            };

            quoteEmailModalRecipientPanelDirective.$inject = [];

            _export('default', quoteEmailModalRecipientPanelDirective);
        }
    };
});
System.register('components/quote-grid/quote-grid.component', ['angular', './quote-grid.directive'], function (_export) {
  /**
   * Created by sergii.danilov on 25/08/2015.
   */
  'use strict';

  var angular, quoteGridDirective;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_quoteGridDirective) {
      quoteGridDirective = _quoteGridDirective['default'];
    }],
    execute: function () {

      angular.module('quote-grid.component', []).directive('quoteGrid', quoteGridDirective);
    }
  };
});
System.register("components/quote-grid/quote-grid.controller", [], function (_export) {
    /**
     * Created by sergii.danilov on 26/08/2015.
     */

    "use strict";

    var QuoteActionsHeaderController;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            QuoteActionsHeaderController = function QuoteActionsHeaderController() {
                _classCallCheck(this, QuoteActionsHeaderController);

                this.ListData = [{
                    "QuoteId": 9,
                    "QuoteNo": "PO-123456",
                    "ClientId": 15,
                    "FieldWorkerId": null,
                    "SiteId": 9,
                    "SellCost": 3.0,
                    "Email": null,
                    "StatusId": 3
                }, {
                    "QuoteId": 10,
                    "QuoteNo": "JW 2232323",
                    "ClientId": 15,
                    "FieldWorkerId": 5,
                    "SiteId": 8,
                    "SellCost": 15.73,
                    "Email": "email@email.com",
                    "StatusId": 2
                }, {
                    "QuoteId": 11,
                    "QuoteNo": "JW 2232323",
                    "ClientId": 20,
                    "FieldWorkerId": 7,
                    "SiteId": null,
                    "SellCost": 75.31,
                    "Email": "info@company.com",
                    "StatusId": 1
                }, {
                    "QuoteId": 12,
                    "QuoteNo": "JW 2232323",
                    "ClientId": 20,
                    "FieldWorkerId": 8,
                    "SiteId": null,
                    "SellCost": 35.45,
                    "Email": "info@company.com",
                    "StatusId": 3
                }];
            };

            _export("default", QuoteActionsHeaderController);

            QuoteActionsHeaderController.$inject = [];
        }
    };
});
System.register('components/quote-grid/quote-grid.directive', ['./quote-grid.controller'], function (_export) {
    /**
     * Created by sergii.danilov on 26/08/2015.
     */

    'use strict';

    var QuoteGridController, QuoteGrid;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function quoteGridDirective() {
        return new QuoteGrid(arguments);
    }

    return {
        setters: [function (_quoteGridController) {
            QuoteGridController = _quoteGridController['default'];
        }],
        execute: function () {
            QuoteGrid = function QuoteGrid() {
                _classCallCheck(this, QuoteGrid);

                return {
                    bindToController: {},
                    controller: QuoteGridController,
                    controllerAs: 'quoteGrid',
                    restrict: 'E',
                    replace: true,
                    scope: true,
                    templateUrl: 'components/quote-grid/quote-grid.template.html'
                };
            };

            quoteGridDirective.$inject = [];

            _export('default', quoteGridDirective);
        }
    };
});
System.register('components/quote-items-panel/quote-items-panel.component', ['angular', './quote-items-panel.controller', './quote-items-panel.directive', './lang/en', './lang/de'], function (_export) {
  /**
   * Created by graham.whelan on 04/08/2015.
   */

  /**
   * import 3rd party libs
   */

  /**
   * import custom configs
   */

  /**
   * import custom components
   */

  'use strict';

  var angular, QuoteItemsPanelController, QuoteItemsPanelDirective, enLang, deLang;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_quoteItemsPanelController) {
      QuoteItemsPanelController = _quoteItemsPanelController['default'];
    }, function (_quoteItemsPanelDirective) {
      QuoteItemsPanelDirective = _quoteItemsPanelDirective['default'];
    }, function (_langEn) {
      enLang = _langEn['default'];
    }, function (_langDe) {
      deLang = _langDe['default'];
    }],
    execute: function () {

      angular.module('quote-items-panel.component', []).controller('QuoteItemsPanelController', QuoteItemsPanelController).config(['componentManagerProvider', function (componentManagerProvider) {
        componentManagerProvider.registerLocalizations('quote-items-panel.component', 'en', enLang);
        componentManagerProvider.registerLocalizations('quote-items-panel.component', 'de', deLang);
      }]).directive('wrkQuoteItemsPanel', QuoteItemsPanelDirective);;
    }
  };
});
System.register("components/quote-items-panel/quote-items-panel.controller", [], function (_export) {
    "use strict";

    var me, QuoteItemsPanelController;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            me = {};

            QuoteItemsPanelController = function QuoteItemsPanelController() {
                _classCallCheck(this, QuoteItemsPanelController);

                me = this;
            };

            QuoteItemsPanelController.$inject = [];

            _export("default", QuoteItemsPanelController);
        }
    };
});
System.register('components/quote-items-panel/quote-items-panel.directive', ['./quote-items-panel.controller'], function (_export) {
    /**
     * Created by graham.whelan on 04/08/2015.
     */

    /**
     *   Usage:
     *   <wrk-quote-items-panel>
     *   </wrk-quote-items-panel>
     */

    'use strict';

    var QuoteItemsPanelController, QuoteItemsPanelDirective;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function quoteItemsPanelDirective() {
        return new QuoteItemsPanelDirective();
    }

    return {
        setters: [function (_quoteItemsPanelController) {
            QuoteItemsPanelController = _quoteItemsPanelController['default'];
        }],
        execute: function () {
            QuoteItemsPanelDirective = function QuoteItemsPanelDirective() {
                _classCallCheck(this, QuoteItemsPanelDirective);

                return {
                    bindToController: {},
                    controller: QuoteItemsPanelController,
                    controllerAs: 'quoteItemsPanel',
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'components/quote-items-panel/quote-items-panel.template.html'
                };
            };

            quoteItemsPanelDirective.$inject = [];

            _export('default', quoteItemsPanelDirective);
        }
    };
});
System.register('components/quote-search-header/quote-search-header.component', ['angular', './quote-search-header.directive'], function (_export) {
  /**
   * Created by sergii.danilov on 26/08/2015.
   */
  'use strict';

  var angular, quoteSearchHeaderDirective;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_quoteSearchHeaderDirective) {
      quoteSearchHeaderDirective = _quoteSearchHeaderDirective['default'];
    }],
    execute: function () {

      angular.module('quote-search-header.component', []).directive('quoteSearchHeader', quoteSearchHeaderDirective);
    }
  };
});
System.register('components/quote-search-header/quote-search-header.controller', [], function (_export) {
    /**
     * Created by sergii.danilov on 26/08/2015.
     */

    'use strict';

    var QuoteSearchHeaderController;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            QuoteSearchHeaderController = (function () {
                function QuoteSearchHeaderController() {
                    _classCallCheck(this, QuoteSearchHeaderController);

                    console.log('QuoteSearchHeaderController', this);
                    this.searchValue = 'abc';
                }

                _createClass(QuoteSearchHeaderController, [{
                    key: 'onSearch',
                    value: function onSearch(value) {
                        console.log('onSearch', value);
                    }
                }, {
                    key: 'onAdd',
                    value: function onAdd() {
                        console.log('Add Quote');
                    }
                }]);

                return QuoteSearchHeaderController;
            })();

            _export('default', QuoteSearchHeaderController);

            QuoteSearchHeaderController.$inject = [];
        }
    };
});
System.register('components/quote-search-header/quote-search-header.directive', ['./quote-search-header.controller'], function (_export) {
    /**
     * Created by sergii.danilov on 26/08/2015.
     */
    'use strict';

    var QuoteSearchHeaderController, QuoteSearchHeader;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function quoteSearchHeaderDirective() {
        return new QuoteSearchHeader(arguments);
    }

    return {
        setters: [function (_quoteSearchHeaderController) {
            QuoteSearchHeaderController = _quoteSearchHeaderController['default'];
        }],
        execute: function () {
            QuoteSearchHeader = function QuoteSearchHeader() {
                _classCallCheck(this, QuoteSearchHeader);

                return {
                    bindToController: {},
                    controller: QuoteSearchHeaderController,
                    controllerAs: 'vma',
                    restrict: 'E',
                    replace: true,
                    scope: true,
                    templateUrl: 'components/quote-search-header/quote-search-header.template.html'
                };
            };

            quoteSearchHeaderDirective.$inject = [];

            _export('default', quoteSearchHeaderDirective);
        }
    };
});
System.register('components/search-panel/search-panel.component', ['angular', './search-panel.directive', './lang/en', './lang/de'], function (_export) {
    /**
     * Created by sergii.danilov on 24/08/2015.
     */

    'use strict';

    var angular, searchPanelDirective, enLang, deLang;
    return {
        setters: [function (_angular) {
            angular = _angular['default'];
        }, function (_searchPanelDirective) {
            searchPanelDirective = _searchPanelDirective['default'];
        }, function (_langEn) {
            enLang = _langEn['default'];
        }, function (_langDe) {
            deLang = _langDe['default'];
        }],
        execute: function () {

            angular.module('search-panel.component', []).directive('wrkSearchPanel', searchPanelDirective).config(['componentManagerProvider', function (componentManagerProvider) {
                componentManagerProvider.registerLocalizations('search-panel.component', 'en', enLang);
                componentManagerProvider.registerLocalizations('search-panel.component', 'de', deLang);
            }]);
        }
    };
});
System.register("components/search-panel/search-panel.controller", [], function (_export) {
    /**
     * Created by sergii.danilov on 24/08/2015.
     */

    "use strict";

    var SearchPanelController;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            SearchPanelController = (function () {
                function SearchPanelController() {
                    _classCallCheck(this, SearchPanelController);
                }

                _createClass(SearchPanelController, [{
                    key: "onSearchInternal",
                    value: function onSearchInternal() {
                        if (this.onSearch) {
                            this.onSearch({
                                value: this.value
                            });
                        }
                    }
                }]);

                return SearchPanelController;
            })();

            _export("default", SearchPanelController);

            SearchPanelController.$inject = [];
        }
    };
});
System.register('components/search-panel/search-panel.directive', ['./search-panel.controller'], function (_export) {
    /**
     * Created by sergii.danilov on 24/08/2015.
     */

    'use strict';

    var SearchPanelController, SearchPanel;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function searchPanelDirective() {
        return new SearchPanel(arguments);
    }

    return {
        setters: [function (_searchPanelController) {
            SearchPanelController = _searchPanelController['default'];
        }],
        execute: function () {
            SearchPanel = function SearchPanel() {
                _classCallCheck(this, SearchPanel);

                return {
                    bindToController: {
                        value: '@',
                        onSearch: '&'
                    },
                    controller: SearchPanelController,
                    controllerAs: 'searchPanel',
                    restrict: 'E',
                    replace: true,
                    scope: true,
                    templateUrl: 'components/search-panel/search-panel.template.html'
                };
            };

            searchPanelDirective.$inject = [];

            _export('default', searchPanelDirective);
        }
    };
});
System.register('components/top-menu/top-menu.component', ['angular', './top-menu.directive', './lang/en', './lang/de'], function (_export) {
    /**
     * Created by sergii.danilov on 24/08/2015.
     */

    'use strict';

    var angular, topMenuDirective, enLang, deLang;
    return {
        setters: [function (_angular) {
            angular = _angular['default'];
        }, function (_topMenuDirective) {
            topMenuDirective = _topMenuDirective['default'];
        }, function (_langEn) {
            enLang = _langEn['default'];
        }, function (_langDe) {
            deLang = _langDe['default'];
        }],
        execute: function () {

            angular.module('top-menu.component', []).directive('wrkTopMenu', topMenuDirective).config(['componentManagerProvider', function (componentManagerProvider) {
                componentManagerProvider.registerLocalizations('top-menu.component', 'en', enLang);
                componentManagerProvider.registerLocalizations('top-menu.component', 'de', deLang);
            }]);
        }
    };
});
System.register('components/top-menu/top-menu.controller', [], function (_export) {
    /**
     * Created by sergii.danilov on 24/08/2015.
     */

    'use strict';

    var arr, TopMenuController;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            arr = [{
                text: 'i18n.TopMenu.Home',
                state: 'home'
            }, {
                text: 'i18n.TopMenu.Quote',
                state: 'quote'
            }];

            TopMenuController = (function () {
                function TopMenuController($translate) {
                    _classCallCheck(this, TopMenuController);

                    this.$translate = $translate;
                }

                _createClass(TopMenuController, [{
                    key: 'setEn',
                    value: function setEn() {
                        this.$translate.use('en');
                    }
                }, {
                    key: 'setDe',
                    value: function setDe() {
                        this.$translate.use('de');
                    }
                }, {
                    key: 'menuItems',
                    get: function get() {
                        return arr;
                    }
                }, {
                    key: 'appTitle',
                    get: function get() {
                        return 'Angular Seed';
                    }
                }]);

                return TopMenuController;
            })();

            _export('default', TopMenuController);

            TopMenuController.$inject = ['$translate'];
        }
    };
});
System.register('components/top-menu/top-menu.directive', ['./top-menu.controller'], function (_export) {
    /**
     * Created by sergii.danilov on 24/08/2015.
     */

    'use strict';

    var TopMenuController, TopMenu;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function topMenuDirective() {
        return new TopMenu(arguments);
    }

    return {
        setters: [function (_topMenuController) {
            TopMenuController = _topMenuController['default'];
        }],
        execute: function () {
            TopMenu = function TopMenu() {
                _classCallCheck(this, TopMenu);

                return {
                    bindToController: {},
                    controller: TopMenuController,
                    controllerAs: 'vm',
                    restrict: 'E',
                    replace: true,
                    scope: true,
                    templateUrl: 'components/top-menu/top-menu.template.html'
                };
            };

            topMenuDirective.$inject = [];

            _export('default', topMenuDirective);
        }
    };
});
System.register('components/home/lang/de', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        MainTitle: 'Homepage'
      });
    }
  };
});
System.register('components/home/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        MainTitle: 'Home Page'
      });
    }
  };
});
System.register('components/quote/lang/de', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        AddQuoteBtn: 'Angebot Hinzufügen'
      });
    }
  };
});
System.register('components/quote/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        AddQuoteBtn: 'Add Quote'
      });
    }
  };
});
System.register("components/quote-actions-header/lang/de", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {}
  };
});
/**
 * Created by sergii.danilov on 27/08/2015.
 */
System.register('components/quote-actions-header/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 27/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        CreateJobButton: 'Create Job',
        DeleteButton: 'Delete'
      });
    }
  };
});
System.register('components/quote-comments-panel/lang/de', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Arbeit-Job',
        ListItem: 'Liste'
      });
    }
  };
});
System.register('components/quote-comments-panel/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Work-Job',
        ListItem: 'List'
      });
    }
  };
});
System.register('components/quote-contacts-panel/lang/de', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Arbeit-Job',
        ListItem: 'Liste'
      });
    }
  };
});
System.register('components/quote-contacts-panel/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Work-Job',
        ListItem: 'List'
      });
    }
  };
});
System.register('components/quote-details/lang/de', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Arbeit-Job',
        ListItem: 'Liste'
      });
    }
  };
});
System.register('components/quote-details/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Work-Job',
        ListItem: 'List'
      });
    }
  };
});
System.register('components/quote-details-panel/lang/de', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Arbeit-Job',
        ListItem: 'Liste'
      });
    }
  };
});
System.register('components/quote-details-panel/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Work-Job',
        ListItem: 'List'
      });
    }
  };
});
System.register('components/quote-documents-panel/lang/de', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Arbeit-Job',
        ListItem: 'Liste'
      });
    }
  };
});
System.register('components/quote-documents-panel/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Work-Job',
        ListItem: 'List'
      });
    }
  };
});
System.register('components/quote-email-modal/lang/de', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Arbeit-Job',
        ListItem: 'Liste'
      });
    }
  };
});
System.register('components/quote-email-modal/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Work-Job',
        ListItem: 'List'
      });
    }
  };
});
System.register('components/quote-email-modal-attachments-panel/lang/de', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Arbeit-Job',
        ListItem: 'Liste'
      });
    }
  };
});
System.register('components/quote-email-modal-attachments-panel/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Work-Job',
        ListItem: 'List'
      });
    }
  };
});
System.register('components/quote-email-modal-message-panel/lang/de', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Arbeit-Job',
        ListItem: 'Liste'
      });
    }
  };
});
System.register('components/quote-email-modal-message-panel/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Work-Job',
        ListItem: 'List'
      });
    }
  };
});
System.register('components/quote-email-modal-recipient-panel/lang/de', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Arbeit-Job',
        ListItem: 'Liste'
      });
    }
  };
});
System.register('components/quote-email-modal-recipient-panel/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Work-Job',
        ListItem: 'List'
      });
    }
  };
});
System.register('components/quote-items-panel/lang/de', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Arbeit-Job',
        ListItem: 'Liste'
      });
    }
  };
});
System.register('components/quote-items-panel/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 17/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        PageTitle: 'Work-Job',
        ListItem: 'List'
      });
    }
  };
});
System.register('components/search-panel/lang/de', [], function (_export) {
  /**
   * Created by sergii.danilov on 24/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        Placeholder: 'Suche'
      });
    }
  };
});
System.register('components/search-panel/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 24/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        Placeholder: 'Search'
      });
    }
  };
});
System.register('components/top-menu/lang/de', [], function (_export) {
  /**
   * Created by sergii.danilov on 24/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        Home: 'Home',
        Quote: 'Angebot'
      });
    }
  };
});
System.register('components/top-menu/lang/en', [], function (_export) {
  /**
   * Created by sergii.danilov on 24/08/2015.
   */

  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        Home: 'Home',
        Quote: 'Quote'
      });
    }
  };
});
System.register('data/dynamic/quote/quote.model', ['validate'], function (_export) {
    /**
     * Created by graham.whelan on 19/08/2015.
     */

    'use strict';

    var validate;
    return {
        setters: [function (_validate) {
            validate = _validate['default'];
        }],
        execute: function () {
            _export('default', {
                name: 'quote',
                endpoint: '/quotes',
                idAttribute: 'id',
                schema: {
                    id: {
                        presence: true,
                        numericality: true
                    },
                    name: {
                        presence: true
                    },
                    price: {
                        presence: false,
                        numericality: true
                    }
                },
                beforeDestroy: function beforeDestroy(resourceName, attrs, cb) {
                    console.log(['Destroying ', attrs.name].join(''));
                    cb(null, attrs);
                },
                methods: {
                    getMyName: function getMyName() {
                        console.log(['Name ', this.name].join(''));
                    }
                }
            });
        }
    };
});
//validate: function(resource, attrs, cb) {
//
//    //  Valdiate Js
//    //let err = Validate(attrs, resource.schema);
//    //if (err) {
//    //    cb(err);
//    //}
//    //else {
//    //    cb(null, err);
//    //}
//}
//# sourceMappingURL=application.js.map