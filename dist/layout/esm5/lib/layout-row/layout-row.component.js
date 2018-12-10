/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, HostBinding } from '@angular/core';
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
            for (var _b = tslib_1.__values(this.class.split(' ')), _c = _b.next(); !_c.done; _c = _b.next()) {
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
export { LayoutRowComponent };
if (false) {
    /** @type {?} */
    LayoutRowComponent.prototype.class;
    /** @type {?} */
    LayoutRowComponent.prototype.padding;
    /** @type {?} */
    LayoutRowComponent.prototype._elementClass;
    /** @type {?} */
    LayoutRowComponent.prototype.paddingLeft;
    /** @type {?} */
    LayoutRowComponent.prototype.paddingRight;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0LXJvdy9sYXlvdXQtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O3FCQVFuRCxFQUFFOzZCQUdpQixFQUFFOztJQUt0QyxzQkFDSSw0Q0FBWTs7OztRQURoQjtZQUVFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckM7OztPQUFBOzs7O0lBRUQscUNBQVE7OztJQUFSOztRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7O1lBRXRDLHdDQUF3QztZQUN4QyxLQUFxQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXZDLElBQU0sTUFBTSxXQUFBO2dCQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2pDOzs7Ozs7Ozs7S0FDRjs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLDJCQUEyQjs7aUJBRXRDOzs7d0JBRUUsS0FBSzswQkFDTCxLQUFLOzhCQUlMLFdBQVcsU0FBQyxvQkFBb0I7K0JBQ2hDLFdBQVcsU0FBQyxxQkFBcUI7K0JBRWpDLFdBQVcsU0FBQyxPQUFPOzs2QkFoQnRCOztTQU9hLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGF5b3V0LXJvdycsXHJcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtcm93LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dFJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgY2xhc3MgPSAnJztcclxuICBASW5wdXQoKSBwYWRkaW5nOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBfZWxlbWVudENsYXNzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdCcpIHBhZGRpbmdMZWZ0O1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1yaWdodCcpIHBhZGRpbmdSaWdodDtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgZ2V0IGVsZW1lbnRDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRDbGFzcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucGFkZGluZ0xlZnQgPSB0aGlzLnBhZGRpbmc7XHJcbiAgICB0aGlzLnBhZGRpbmdSaWdodCA9IHRoaXMucGFkZGluZztcclxuICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKCdyb3cnKTtcclxuICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKCdsYXlvdXQtcm93Jyk7XHJcblxyXG4gICAgLy8gQWRkIGFueSBjbGFzc2VzIGFkZGVkIG9uIHRoaXMgZWxlbWVudFxyXG4gICAgZm9yIChjb25zdCBfY2xhc3Mgb2YgdGhpcy5jbGFzcy5zcGxpdCgnICcpKSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKF9jbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==