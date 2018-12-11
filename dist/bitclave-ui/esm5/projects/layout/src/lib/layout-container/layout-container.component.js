/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostBinding, Input } from '@angular/core';
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
export { LayoutContainerComponent };
if (false) {
    /** @type {?} */
    LayoutContainerComponent.prototype.class;
    /** @type {?} */
    LayoutContainerComponent.prototype._elementClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYml0Y2xhdmUvYml0Y2xhdmUtdWkvIiwic291cmNlcyI6WyJwcm9qZWN0cy9sYXlvdXQvc3JjL2xpYi9sYXlvdXQtY29udGFpbmVyL2xheW91dC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7cUJBUW5ELEVBQUU7NkJBQ08sRUFBRTs7SUFFNUIsc0JBQ0ksa0RBQVk7Ozs7UUFEaEI7WUFFRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDOzs7T0FBQTs7OztJQUNELDJDQUFROzs7SUFBUjs7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOztZQUU1Qyx3Q0FBd0M7WUFDeEMsS0FBcUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO2dCQUF2QyxJQUFNLE1BQU0sV0FBQTtnQkFDZixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQzs7Ozs7Ozs7O0tBQ0Y7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDJCQUEyQjs7aUJBRXRDOzs7d0JBRUUsS0FBSzsrQkFHTCxXQUFXLFNBQUMsT0FBTzs7bUNBWHRCOztTQU9hLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGF5b3V0LWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgY2xhc3MgPSAnJztcclxuICBwcm90ZWN0ZWQgX2VsZW1lbnRDbGFzcyA9IFtdO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBnZXQgZWxlbWVudENsYXNzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudENsYXNzLmpvaW4oJyAnKTtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50Q2xhc3MucHVzaCgnY29udGFpbmVyJyk7XHJcbiAgICB0aGlzLl9lbGVtZW50Q2xhc3MucHVzaCgnbGF5b3V0LWNvbnRhaW5lcicpO1xyXG5cclxuICAgIC8vIEFkZCBhbnkgY2xhc3NlcyBhZGRlZCBvbiB0aGlzIGVsZW1lbnRcclxuICAgIGZvciAoY29uc3QgX2NsYXNzIG9mIHRoaXMuY2xhc3Muc3BsaXQoJyAnKSkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50Q2xhc3MucHVzaChfY2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=