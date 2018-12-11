import { CommonModule } from '@angular/common';
import { Component, Input, HostBinding, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LayoutColumnComponent {
    constructor() {
        this.class = '';
        this._elementClass = [];
    }
    /**
     * @return {?}
     */
    get elementClass() {
        return this._elementClass.join(' ');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._elementClass.push('layout-column');
        this._elementClass.push('col-xs-' + this.size);
        this._elementClass.push('col-md-' + this.size);
        if (this.offset > 0) {
            this._elementClass.push('col-xs-offset-' + this.offset);
            this._elementClass.push('col-md-offset-' + this.offset);
        }
        // Add any classes added on this element
        for (const _class of this.class.split(' ')) {
            this._elementClass.push(_class);
        }
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LayoutRowComponent {
    constructor() {
        this.class = '';
        this._elementClass = [];
    }
    /**
     * @return {?}
     */
    get elementClass() {
        return this._elementClass.join(' ');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.paddingLeft = this.padding;
        this.paddingRight = this.padding;
        this._elementClass.push('row');
        this._elementClass.push('layout-row');
        // Add any classes added on this element
        for (const _class of this.class.split(' ')) {
            this._elementClass.push(_class);
        }
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LayoutContainerComponent {
    constructor() {
        this.class = '';
        this._elementClass = [];
    }
    /**
     * @return {?}
     */
    get elementClass() {
        return this._elementClass.join(' ');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._elementClass.push('container');
        this._elementClass.push('layout-container');
        // Add any classes added on this element
        for (const _class of this.class.split(' ')) {
            this._elementClass.push(_class);
        }
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LayoutModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { LayoutModule, LayoutColumnComponent as ɵa, LayoutContainerComponent as ɵc, LayoutRowComponent as ɵb };

//# sourceMappingURL=bitclave-bitclave-ui.js.map