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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYml0Y2xhdmUvYml0Y2xhdmUtdWkvIiwic291cmNlcyI6WyJwcm9qZWN0cy9sYXlvdXQvc3JjL2xpYi9sYXlvdXQtcm93L2xheW91dC1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7cUJBUW5ELEVBQUU7NkJBR2lCLEVBQUU7O0lBS3RDLHNCQUNJLDRDQUFZOzs7O1FBRGhCO1lBRUUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQzs7O09BQUE7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7O1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs7WUFFdEMsd0NBQXdDO1lBQ3hDLEtBQXFCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBdkMsSUFBTSxNQUFNLFdBQUE7Z0JBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDakM7Ozs7Ozs7OztLQUNGOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsMkJBQTJCOztpQkFFdEM7Ozt3QkFFRSxLQUFLOzBCQUNMLEtBQUs7OEJBSUwsV0FBVyxTQUFDLG9CQUFvQjsrQkFDaEMsV0FBVyxTQUFDLHFCQUFxQjsrQkFFakMsV0FBVyxTQUFDLE9BQU87OzZCQWhCdEI7O1NBT2Esa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsYXlvdXQtcm93JyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gIHN0eWxlVXJsczogWycuL2xheW91dC1yb3cuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0Um93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgpIHBhZGRpbmc6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIF9lbGVtZW50Q2xhc3M6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1sZWZ0JykgcGFkZGluZ0xlZnQ7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLXJpZ2h0JykgcGFkZGluZ1JpZ2h0O1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBnZXQgZWxlbWVudENsYXNzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudENsYXNzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYWRkaW5nTGVmdCA9IHRoaXMucGFkZGluZztcclxuICAgIHRoaXMucGFkZGluZ1JpZ2h0ID0gdGhpcy5wYWRkaW5nO1xyXG4gICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goJ3JvdycpO1xyXG4gICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goJ2xheW91dC1yb3cnKTtcclxuXHJcbiAgICAvLyBBZGQgYW55IGNsYXNzZXMgYWRkZWQgb24gdGhpcyBlbGVtZW50XHJcbiAgICBmb3IgKGNvbnN0IF9jbGFzcyBvZiB0aGlzLmNsYXNzLnNwbGl0KCcgJykpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goX2NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19