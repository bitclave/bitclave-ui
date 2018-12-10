/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, HostBinding } from '@angular/core';
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
export { LayoutColumnComponent };
if (false) {
    /** @type {?} */
    LayoutColumnComponent.prototype.size;
    /** @type {?} */
    LayoutColumnComponent.prototype.offset;
    /** @type {?} */
    LayoutColumnComponent.prototype.class;
    /** @type {?} */
    LayoutColumnComponent.prototype._elementClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0LWNvbHVtbi9sYXlvdXQtY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O3FCQVVuRCxFQUFFOzZCQUVpQixFQUFFOztJQUV0QyxzQkFDSSwrQ0FBWTs7OztRQURoQjtZQUVFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckM7OztPQUFBOzs7O0lBQ0Qsd0NBQVE7OztJQUFSOztRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekQ7O1lBRUQsd0NBQXdDO1lBQ3hDLEtBQXFCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBdkMsSUFBTSxNQUFNLFdBQUE7Z0JBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDakM7Ozs7Ozs7OztLQUNGOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsMkJBQTJCOztpQkFFdEM7Ozt1QkFFRSxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzsrQkFJTCxXQUFXLFNBQUMsT0FBTzs7Z0NBZHRCOztTQU9hLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5b3V0LWNvbHVtbicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWycuL2xheW91dC1jb2x1bW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRDb2x1bW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIG9mZnNldDogbnVtYmVyO1xuICBASW5wdXQoKSBjbGFzcyA9ICcnO1xuXG4gIHByb3RlY3RlZCBfZWxlbWVudENsYXNzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgZWxlbWVudENsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRDbGFzcy5qb2luKCcgJyk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goJ2xheW91dC1jb2x1bW4nKTtcbiAgICB0aGlzLl9lbGVtZW50Q2xhc3MucHVzaCgnY29sLXhzLScgKyB0aGlzLnNpemUpO1xuICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKCdjb2wtbWQtJyArIHRoaXMuc2l6ZSk7XG4gICAgaWYgKHRoaXMub2Zmc2V0ID4gMCkge1xuICAgICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goJ2NvbC14cy1vZmZzZXQtJyArIHRoaXMub2Zmc2V0KTtcbiAgICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKCdjb2wtbWQtb2Zmc2V0LScgKyB0aGlzLm9mZnNldCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIGFueSBjbGFzc2VzIGFkZGVkIG9uIHRoaXMgZWxlbWVudFxuICAgIGZvciAoY29uc3QgX2NsYXNzIG9mIHRoaXMuY2xhc3Muc3BsaXQoJyAnKSkge1xuICAgICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goX2NsYXNzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==