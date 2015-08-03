System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ],
    "stage": 1
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "main-bundle": [
      "npm:babel-runtime@5.8.20/helpers/class-call-check",
      "npm:zone.js@0.5.2/lib/utils",
      "npm:zone.js@0.5.2/lib/patch/functions",
      "npm:zone.js@0.5.2/lib/patch/mutation-observer",
      "npm:zone.js@0.5.2/lib/patch/define-property",
      "npm:zone.js@0.5.2/lib/patch/register-element",
      "npm:zone.js@0.5.2/lib/patch/websocket",
      "npm:zone.js@0.5.2/lib/patch/event-target",
      "npm:zone.js@0.5.2/lib/patch/property-descriptor",
      "npm:zone.js@0.5.2/lib/patch/geolocation",
      "npm:reflect-metadata@0.1.0/Reflect",
      "github:es-shims/es6-shim@0.33.0/es6-shim",
      "npm:angular2@2.0.0-alpha.33/src/facade/lang",
      "npm:angular2@2.0.0-alpha.33/src/util/decorators",
      "npm:angular2@2.0.0-alpha.33/src/di/forward_ref",
      "npm:angular2@2.0.0-alpha.33/src/facade/collection",
      "npm:angular2@2.0.0-alpha.33/src/reflection/reflector",
      "npm:angular2@2.0.0-alpha.33/src/reflection/reflection_capabilities",
      "npm:angular2@2.0.0-alpha.33/src/di/type_literal",
      "npm:angular2@2.0.0-alpha.33/src/di/exceptions",
      "npm:process@0.10.1/browser",
      "npm:angular2@2.0.0-alpha.33/src/di/opaque_token",
      "npm:angular2@2.0.0-alpha.33/src/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.33/src/dom/generic_browser_adapter",
      "npm:rx@2.5.1/dist/rx",
      "npm:rx@2.5.1/dist/rx.aggregates",
      "npm:rx@2.5.1/dist/rx.async",
      "npm:rx@2.5.1/dist/rx.backpressure",
      "npm:rx@2.5.1/dist/rx.binding",
      "npm:rx@2.5.1/dist/rx.coincidence",
      "npm:rx@2.5.1/dist/rx.experimental",
      "npm:rx@2.5.1/dist/rx.joinpatterns",
      "npm:rx@2.5.1/dist/rx.sorting",
      "npm:rx@2.5.1/dist/rx.virtualtime",
      "npm:rx@2.5.1/dist/rx.testing",
      "npm:rx@2.5.1/dist/rx.time",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/constants",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/exceptions",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/pipes/pipe",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/proto_record",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/codegen_name_util",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/coalesce",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/parser/ast",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/dynamic_change_detector",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/directive_record",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/pregen_proto_change_detector",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/pipes/pipes",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/pipes/iterable_changes",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/pipes/keyvalue_changes",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/pipes/observable_pipe",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/pipes/promise_pipe",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/pipes/uppercase_pipe",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/pipes/lowercase_pipe",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/pipes/json_pipe",
      "npm:angular2@2.0.0-alpha.33/src/facade/math",
      "npm:angular2@2.0.0-alpha.33/src/facade/intl",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/pipes/number_pipe",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/pipes/null_pipe",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/interfaces",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/parser/lexer",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/parser/parser",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/parser/locals",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/binding_record",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/element_binder",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/view_ref",
      "npm:angular2@2.0.0-alpha.33/src/core/annotations_impl/di",
      "npm:angular2@2.0.0-alpha.33/src/render/api",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/element_ref",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/template_ref",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/view_pool",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/view_listener",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/view_container_ref",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/directive_lifecycle_reflector",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/query_list",
      "npm:angular2@2.0.0-alpha.33/src/core/annotations_impl/view",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/component_url_mapper",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/proto_view_factory",
      "npm:angular2@2.0.0-alpha.33/src/services/url_resolver",
      "npm:angular2@2.0.0-alpha.33/src/services/app_root_url",
      "npm:angular2@2.0.0-alpha.33/src/core/exception_handler",
      "npm:angular2@2.0.0-alpha.33/src/render/xhr",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/style_url_resolver",
      "npm:angular2@2.0.0-alpha.33/src/core/zone/ng_zone",
      "npm:angular2@2.0.0-alpha.33/src/core/life_cycle/life_cycle",
      "npm:angular2@2.0.0-alpha.33/src/render/xhr_impl",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/events/event_manager",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/events/key_events",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/events/hammer_common",
      "npm:angular2@2.0.0-alpha.33/src/services/anchor_based_app_root_url",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/dynamic_component_loader",
      "npm:angular2@2.0.0-alpha.33/src/core/testability/get_testability",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/dom_tokens",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/compile_element",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/compile_control",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/view/proto_view",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/view/element_binder",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/util",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/property_binding_parser",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/text_interpolation_parser",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/selector",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/view_splitter",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/shadow_css",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/view/proto_view_merger",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/view/view",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/view/fragment",
      "npm:angular2@2.0.0-alpha.33/src/core/application_tokens",
      "npm:angular2@2.0.0-alpha.33/src/core/annotations/annotations",
      "npm:angular2@2.0.0-alpha.33/src/core/annotations/view",
      "npm:angular2@2.0.0-alpha.33/src/core/annotations/di",
      "npm:angular2@2.0.0-alpha.33/src/core/annotations/decorators",
      "npm:angular2@2.0.0-alpha.33/core",
      "npm:angular2@2.0.0-alpha.33/src/directives/ng_for",
      "npm:angular2@2.0.0-alpha.33/src/directives/ng_if",
      "npm:angular2@2.0.0-alpha.33/src/directives/ng_non_bindable",
      "npm:angular2@2.0.0-alpha.33/src/directives/ng_switch",
      "npm:angular2@2.0.0-alpha.33/src/directives/class",
      "npm:angular2@2.0.0-alpha.33/src/directives/ng_style",
      "npm:angular2@2.0.0-alpha.33/src/http/interfaces",
      "npm:angular2@2.0.0-alpha.33/src/http/headers",
      "npm:angular2@2.0.0-alpha.33/src/http/enums",
      "npm:angular2@2.0.0-alpha.33/src/http/http_utils",
      "npm:angular2@2.0.0-alpha.33/src/http/base_response_options",
      "npm:angular2@2.0.0-alpha.33/src/http/backends/browser_xhr",
      "npm:angular2@2.0.0-alpha.33/src/http/backends/browser_jsonp",
      "npm:angular2@2.0.0-alpha.33/src/http/backends/mock_backend",
      "npm:angular2@2.0.0-alpha.33/src/http/url_search_params",
      "npm:angular2@2.0.0-alpha.33/src/forms/validators",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives/abstract_control_directive",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives/control_container",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives/ng_control",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives/validators",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives/shared",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives/ng_form_control",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives/ng_model",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives/ng_control_group",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives/ng_form_model",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives/ng_form",
      "npm:angular2@2.0.0-alpha.33/render",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives/checkbox_value_accessor",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives/select_control_value_accessor",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives",
      "npm:angular2@2.0.0-alpha.33/src/forms/form_builder",
      "npm:core-js@0.9.18/library/modules/$.fw",
      "npm:core-js@0.9.18/library/modules/$.unscope",
      "npm:core-js@0.9.18/library/modules/$.uid",
      "npm:core-js@0.9.18/library/modules/$.shared",
      "npm:core-js@0.9.18/library/modules/$.assert",
      "npm:core-js@0.9.18/library/modules/$.def",
      "npm:core-js@0.9.18/library/modules/$.redef",
      "npm:core-js@0.9.18/library/modules/$.string-at",
      "npm:core-js@0.9.18/library/modules/core.iter-helpers",
      "src/model",
      "npm:zone.js@0.5.2/lib/patch/promise",
      "npm:zone.js@0.5.2/lib/patch/browser",
      "npm:reflect-metadata@0.1.0",
      "github:es-shims/es6-shim@0.33.0",
      "npm:angular2@2.0.0-alpha.33/src/di/metadata",
      "npm:angular2@2.0.0-alpha.33/src/di/decorators",
      "npm:angular2@2.0.0-alpha.33/src/reflection/reflection",
      "npm:angular2@2.0.0-alpha.33/src/di/key",
      "npm:process@0.10.1",
      "npm:angular2@2.0.0-alpha.33/src/dom/browser_adapter",
      "npm:rx@2.5.1/index",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/change_detector_ref",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/change_detection_util",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/proto_change_detector",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/pipes/limit_to_pipe",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/pipes/date_pipe",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/view",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/view_manager_utils",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/view_resolver",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/style_inliner",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/events/hammer_gestures",
      "npm:angular2@2.0.0-alpha.33/src/core/testability/testability",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/view/shared_styles_host",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/view/proto_view_builder",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/directive_parser",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/style_encapsulator",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/dom_renderer",
      "npm:angular2@2.0.0-alpha.33/annotations",
      "npm:angular2@2.0.0-alpha.33/directives",
      "npm:angular2@2.0.0-alpha.33/src/http/static_request",
      "npm:angular2@2.0.0-alpha.33/src/http/base_request_options",
      "npm:angular2@2.0.0-alpha.33/src/http/static_response",
      "npm:angular2@2.0.0-alpha.33/src/http/backends/jsonp_backend",
      "npm:angular2@2.0.0-alpha.33/src/forms/model",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives/ng_control_name",
      "npm:angular2@2.0.0-alpha.33/src/forms/directives/default_value_accessor",
      "npm:core-js@0.9.18/library/modules/$",
      "npm:core-js@0.9.18/library/modules/$.wks",
      "npm:core-js@0.9.18/library/modules/$.iter-define",
      "npm:core-js@0.9.18/library/modules/es6.string.iterator",
      "npm:zone.js@0.5.2/lib/core",
      "npm:angular2@2.0.0-alpha.33/src/di/binding",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:rx@2.5.1",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/abstract_change_detector",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/view_manager",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/view_loader",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/compile_pipeline",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/compile_step_factory",
      "npm:angular2@2.0.0-alpha.33/src/http/http",
      "npm:angular2@2.0.0-alpha.33/src/http/backends/xhr_backend",
      "npm:angular2@2.0.0-alpha.33/forms",
      "npm:core-js@0.9.18/library/fn/object/define-property",
      "npm:core-js@0.9.18/library/modules/$.cof",
      "npm:zone.js@0.5.2/lib/zone",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:angular2@2.0.0-alpha.33/src/facade/async",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/change_detection_jit_generator",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/element_injector",
      "npm:angular2@2.0.0-alpha.33/src/render/dom/compiler/compiler",
      "npm:angular2@2.0.0-alpha.33/http",
      "npm:babel-runtime@5.8.20/core-js/object/define-property",
      "npm:core-js@0.9.18/library/modules/$.iter",
      "npm:zone.js@0.5.2",
      "npm:angular2@2.0.0-alpha.33/src/di/injector",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/jit_proto_change_detector",
      "npm:angular2@2.0.0-alpha.33/src/render/render",
      "npm:babel-runtime@5.8.20/helpers/create-class",
      "npm:core-js@0.9.18/library/modules/es6.array.iterator",
      "npm:angular2@2.0.0-alpha.33/di",
      "npm:angular2@2.0.0-alpha.33/src/change_detection/change_detection",
      "src/components/todo-item",
      "npm:core-js@0.9.18/library/modules/web.dom.iterable",
      "npm:angular2@2.0.0-alpha.33/change_detection",
      "npm:core-js@0.9.18/library/fn/get-iterator",
      "npm:angular2@2.0.0-alpha.33/src/core/annotations_impl/annotations",
      "npm:babel-runtime@5.8.20/core-js/get-iterator",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/directive_resolver",
      "src/store",
      "npm:angular2@2.0.0-alpha.33/src/core/compiler/compiler",
      "src/components/todo-list",
      "npm:angular2@2.0.0-alpha.33/src/core/application_common",
      "npm:angular2@2.0.0-alpha.33/angular2",
      "src/main"
    ]
  }
});

System.config({
  "map": {
    "angular2": "npm:angular2@2.0.0-alpha.33",
    "babel": "npm:babel-core@5.8.20",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "npm:core-js@0.9.18",
    "es6-shim": "github:es-shims/es6-shim@0.33.0",
    "reflect-metadata": "npm:reflect-metadata@0.1.0",
    "zone.js": "npm:zone.js@0.5.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.3.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:angular2@2.0.0-alpha.33": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "reflect-metadata": "npm:reflect-metadata@0.1.0",
      "rx": "npm:rx@2.5.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zone.js": "npm:zone.js@0.5.2"
    },
    "npm:asn1.js@2.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:browserify-aes@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.2",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer-xor@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.3.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.2",
      "browserify-sign": "npm:browserify-sign@3.0.2",
      "create-ecdh": "npm:create-ecdh@2.0.1",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.1.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@2.1.0": {
      "bn.js": "npm:bn.js@3.1.1",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:parse-asn1@3.0.1": {
      "asn1.js": "npm:asn1.js@2.1.3",
      "browserify-aes": "npm:browserify-aes@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:reflect-metadata@0.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:rx@2.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sha.js@2.4.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:zone.js@0.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

