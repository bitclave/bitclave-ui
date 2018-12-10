(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('layout', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global.layout = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LayoutColumnComponent = /** @class */ (function () {
        function LayoutColumnComponent() {
            this.class = '';
            this._elementClass = [];
        }
        Object.defineProperty(LayoutColumnComponent.prototype, "elementClass", {
            get: /**
             * @return {?}
             */ function () {
                return this._elementClass.join(' ');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LayoutColumnComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                this._elementClass.push('layout-column');
                this._elementClass.push('col-xs-' + this.size);
                this._elementClass.push('col-md-' + this.size);
                if (this.offset > 0) {
                    this._elementClass.push('col-xs-offset-' + this.offset);
                    this._elementClass.push('col-md-offset-' + this.offset);
                }
                try {
                    // Add any classes added on this element
                    for (var _b = __values(this.class.split(' ')), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _class = _c.value;
                        this._elementClass.push(_class);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        LayoutColumnComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'layout-column',
                        template: '<ng-content></ng-content>',
                        styles: [""]
                    }] }
        ];
        LayoutColumnComponent.propDecorators = {
            size: [{ type: core.Input }],
            offset: [{ type: core.Input }],
            class: [{ type: core.Input }],
            elementClass: [{ type: core.HostBinding, args: ['class',] }]
        };
        return LayoutColumnComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LayoutRowComponent = /** @class */ (function () {
        function LayoutRowComponent() {
            this.class = '';
            this._elementClass = [];
        }
        Object.defineProperty(LayoutRowComponent.prototype, "elementClass", {
            get: /**
             * @return {?}
             */ function () {
                return this._elementClass.join(' ');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LayoutRowComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                this.paddingLeft = this.padding;
                this.paddingRight = this.padding;
                this._elementClass.push('row');
                this._elementClass.push('layout-row');
                try {
                    // Add any classes added on this element
                    for (var _b = __values(this.class.split(' ')), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _class = _c.value;
                        this._elementClass.push(_class);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        LayoutRowComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'layout-row',
                        template: '<ng-content></ng-content>',
                        styles: [""]
                    }] }
        ];
        LayoutRowComponent.propDecorators = {
            class: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            paddingLeft: [{ type: core.HostBinding, args: ['style.padding-left',] }],
            paddingRight: [{ type: core.HostBinding, args: ['style.padding-right',] }],
            elementClass: [{ type: core.HostBinding, args: ['class',] }]
        };
        return LayoutRowComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LayoutContainerComponent = /** @class */ (function () {
        function LayoutContainerComponent() {
            this.class = '';
            this._elementClass = [];
        }
        Object.defineProperty(LayoutContainerComponent.prototype, "elementClass", {
            get: /**
             * @return {?}
             */ function () {
                return this._elementClass.join(' ');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LayoutContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                this._elementClass.push('container');
                this._elementClass.push('layout-container');
                try {
                    // Add any classes added on this element
                    for (var _b = __values(this.class.split(' ')), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _class = _c.value;
                        this._elementClass.push(_class);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        LayoutContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'layout-container',
                        template: '<ng-content></ng-content>',
                        styles: [""]
                    }] }
        ];
        LayoutContainerComponent.propDecorators = {
            class: [{ type: core.Input }],
            elementClass: [{ type: core.HostBinding, args: ['class',] }]
        };
        return LayoutContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        LayoutModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            LayoutColumnComponent,
                            LayoutRowComponent,
                            LayoutContainerComponent
                        ],
                        declarations: [
                            LayoutColumnComponent,
                            LayoutRowComponent,
                            LayoutContainerComponent
                        ]
                    },] }
        ];
        return LayoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.LayoutModule = LayoutModule;
    exports.ɵa = LayoutColumnComponent;
    exports.ɵc = LayoutContainerComponent;
    exports.ɵb = LayoutRowComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=layout.umd.js.map