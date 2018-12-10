import { CommonModule } from '@angular/common';
import { __values } from 'tslib';
import { Component, Input, HostBinding, NgModule } from '@angular/core';

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
         */
        function () {
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    LayoutColumnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'layout-column',
                    template: '<ng-content></ng-content>',
                    styles: [""]
                }] }
    ];
    LayoutColumnComponent.propDecorators = {
        size: [{ type: Input }],
        offset: [{ type: Input }],
        class: [{ type: Input }],
        elementClass: [{ type: HostBinding, args: ['class',] }]
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
         */
        function () {
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    LayoutRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'layout-row',
                    template: '<ng-content></ng-content>',
                    styles: [""]
                }] }
    ];
    LayoutRowComponent.propDecorators = {
        class: [{ type: Input }],
        padding: [{ type: Input }],
        paddingLeft: [{ type: HostBinding, args: ['style.padding-left',] }],
        paddingRight: [{ type: HostBinding, args: ['style.padding-right',] }],
        elementClass: [{ type: HostBinding, args: ['class',] }]
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
         */
        function () {
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    LayoutContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'layout-container',
                    template: '<ng-content></ng-content>',
                    styles: [""]
                }] }
    ];
    LayoutContainerComponent.propDecorators = {
        class: [{ type: Input }],
        elementClass: [{ type: HostBinding, args: ['class',] }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { LayoutModule };

//# sourceMappingURL=bitclave-bitclave-ui.js.map