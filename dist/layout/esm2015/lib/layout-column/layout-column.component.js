/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
export class LayoutColumnComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0LWNvbHVtbi9sYXlvdXQtY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3RFLE1BQU07O3FCQUdhLEVBQUU7NkJBRWlCLEVBQUU7Ozs7O0lBRXRDLElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDckM7Ozs7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6RDs7UUFHRCxLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO0tBQ0Y7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSwyQkFBMkI7O2FBRXRDOzs7bUJBRUUsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7MkJBSUwsV0FBVyxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheW91dC1jb2x1bW4nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtY29sdW1uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29sdW1uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBvZmZzZXQ6IG51bWJlcjtcbiAgQElucHV0KCkgY2xhc3MgPSAnJztcblxuICBwcm90ZWN0ZWQgX2VsZW1lbnRDbGFzczogc3RyaW5nW10gPSBbXTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGVsZW1lbnRDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50Q2xhc3Muam9pbignICcpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKCdsYXlvdXQtY29sdW1uJyk7XG4gICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goJ2NvbC14cy0nICsgdGhpcy5zaXplKTtcbiAgICB0aGlzLl9lbGVtZW50Q2xhc3MucHVzaCgnY29sLW1kLScgKyB0aGlzLnNpemUpO1xuICAgIGlmICh0aGlzLm9mZnNldCA+IDApIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKCdjb2wteHMtb2Zmc2V0LScgKyB0aGlzLm9mZnNldCk7XG4gICAgICB0aGlzLl9lbGVtZW50Q2xhc3MucHVzaCgnY29sLW1kLW9mZnNldC0nICsgdGhpcy5vZmZzZXQpO1xuICAgIH1cblxuICAgIC8vIEFkZCBhbnkgY2xhc3NlcyBhZGRlZCBvbiB0aGlzIGVsZW1lbnRcbiAgICBmb3IgKGNvbnN0IF9jbGFzcyBvZiB0aGlzLmNsYXNzLnNwbGl0KCcgJykpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKF9jbGFzcyk7XG4gICAgfVxuICB9XG59XG4iXX0=