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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0LWNvbnRhaW5lci9sYXlvdXQtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O3FCQVFuRCxFQUFFOzZCQUNPLEVBQUU7O0lBRTVCLHNCQUNJLGtEQUFZOzs7O1FBRGhCO1lBRUUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQzs7O09BQUE7Ozs7SUFDRCwyQ0FBUTs7O0lBQVI7O1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7WUFFNUMsd0NBQXdDO1lBQ3hDLEtBQXFCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBdkMsSUFBTSxNQUFNLFdBQUE7Z0JBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDakM7Ozs7Ozs7OztLQUNGOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSwyQkFBMkI7O2lCQUV0Qzs7O3dCQUVFLEtBQUs7K0JBR0wsV0FBVyxTQUFDLE9BQU87O21DQVh0Qjs7U0FPYSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xheW91dC1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNsYXNzID0gJyc7XHJcbiAgcHJvdGVjdGVkIF9lbGVtZW50Q2xhc3MgPSBbXTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgZ2V0IGVsZW1lbnRDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRDbGFzcy5qb2luKCcgJyk7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goJ2NvbnRhaW5lcicpO1xyXG4gICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goJ2xheW91dC1jb250YWluZXInKTtcclxuXHJcbiAgICAvLyBBZGQgYW55IGNsYXNzZXMgYWRkZWQgb24gdGhpcyBlbGVtZW50XHJcbiAgICBmb3IgKGNvbnN0IF9jbGFzcyBvZiB0aGlzLmNsYXNzLnNwbGl0KCcgJykpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goX2NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19