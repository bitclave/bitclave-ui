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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYml0Y2xhdmUvYml0Y2xhdmUtdWkvIiwic291cmNlcyI6WyJwcm9qZWN0cy9sYXlvdXQvc3JjL2xpYi9sYXlvdXQtY29sdW1uL2xheW91dC1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7cUJBVW5ELEVBQUU7NkJBRWlCLEVBQUU7O0lBRXRDLHNCQUNJLCtDQUFZOzs7O1FBRGhCO1lBRUUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQzs7O09BQUE7Ozs7SUFDRCx3Q0FBUTs7O0lBQVI7O1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6RDs7WUFFRCx3Q0FBd0M7WUFDeEMsS0FBcUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO2dCQUF2QyxJQUFNLE1BQU0sV0FBQTtnQkFDZixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQzs7Ozs7Ozs7O0tBQ0Y7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSwyQkFBMkI7O2lCQUV0Qzs7O3VCQUVFLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOytCQUlMLFdBQVcsU0FBQyxPQUFPOztnQ0FkdEI7O1NBT2EscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtY29sdW1uJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LWNvbHVtbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExheW91dENvbHVtbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgb2Zmc2V0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGNsYXNzID0gJyc7XG5cbiAgcHJvdGVjdGVkIF9lbGVtZW50Q2xhc3M6IHN0cmluZ1tdID0gW107XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBlbGVtZW50Q2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudENsYXNzLmpvaW4oJyAnKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9lbGVtZW50Q2xhc3MucHVzaCgnbGF5b3V0LWNvbHVtbicpO1xuICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKCdjb2wteHMtJyArIHRoaXMuc2l6ZSk7XG4gICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goJ2NvbC1tZC0nICsgdGhpcy5zaXplKTtcbiAgICBpZiAodGhpcy5vZmZzZXQgPiAwKSB7XG4gICAgICB0aGlzLl9lbGVtZW50Q2xhc3MucHVzaCgnY29sLXhzLW9mZnNldC0nICsgdGhpcy5vZmZzZXQpO1xuICAgICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goJ2NvbC1tZC1vZmZzZXQtJyArIHRoaXMub2Zmc2V0KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYW55IGNsYXNzZXMgYWRkZWQgb24gdGhpcyBlbGVtZW50XG4gICAgZm9yIChjb25zdCBfY2xhc3Mgb2YgdGhpcy5jbGFzcy5zcGxpdCgnICcpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50Q2xhc3MucHVzaChfY2xhc3MpO1xuICAgIH1cbiAgfVxufVxuIl19