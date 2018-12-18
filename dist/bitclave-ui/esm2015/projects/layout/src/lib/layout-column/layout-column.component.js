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
        this._elementClass.push('col-md-' + (this.md || this.size));
        this.lg && this._elementClass.push('col-lg-' + this.lg);
        this.sm && this._elementClass.push('col-sm-' + this.sm);
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
    sm: [{ type: Input }],
    md: [{ type: Input }],
    lg: [{ type: Input }],
    offset: [{ type: Input }],
    class: [{ type: Input }],
    elementClass: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    LayoutColumnComponent.prototype.size;
    /** @type {?} */
    LayoutColumnComponent.prototype.sm;
    /** @type {?} */
    LayoutColumnComponent.prototype.md;
    /** @type {?} */
    LayoutColumnComponent.prototype.lg;
    /** @type {?} */
    LayoutColumnComponent.prototype.offset;
    /** @type {?} */
    LayoutColumnComponent.prototype.class;
    /** @type {?} */
    LayoutColumnComponent.prototype._elementClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYml0Y2xhdmUvYml0Y2xhdmUtdWkvIiwic291cmNlcyI6WyJwcm9qZWN0cy9sYXlvdXQvc3JjL2xpYi9sYXlvdXQtY29sdW1uL2xheW91dC1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdEUsTUFBTTs7cUJBTWEsRUFBRTs2QkFFaUIsRUFBRTs7Ozs7SUFFdEMsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNyQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekQ7O1FBR0QsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQztLQUNGOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsMkJBQTJCOzthQUV0Qzs7O21CQUVFLEtBQUs7aUJBQ0wsS0FBSztpQkFDTCxLQUFLO2lCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLOzJCQUlMLFdBQVcsU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtY29sdW1uJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LWNvbHVtbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExheW91dENvbHVtbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgc206IG51bWJlcjtcbiAgQElucHV0KCkgbWQ6IG51bWJlcjtcbiAgQElucHV0KCkgbGc6IG51bWJlcjtcbiAgQElucHV0KCkgb2Zmc2V0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGNsYXNzID0gJyc7XG5cbiAgcHJvdGVjdGVkIF9lbGVtZW50Q2xhc3M6IHN0cmluZ1tdID0gW107XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBlbGVtZW50Q2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudENsYXNzLmpvaW4oJyAnKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9lbGVtZW50Q2xhc3MucHVzaCgnbGF5b3V0LWNvbHVtbicpO1xuICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKCdjb2wteHMtJyArIHRoaXMuc2l6ZSk7XG4gICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goJ2NvbC1tZC0nICsgKHRoaXMubWQgfHwgdGhpcy5zaXplKSk7XG4gICAgdGhpcy5sZyAmJiB0aGlzLl9lbGVtZW50Q2xhc3MucHVzaCgnY29sLWxnLScgKyB0aGlzLmxnKTtcbiAgICB0aGlzLnNtICYmIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKCdjb2wtc20tJyArIHRoaXMuc20pO1xuICAgIGlmICh0aGlzLm9mZnNldCA+IDApIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKCdjb2wteHMtb2Zmc2V0LScgKyB0aGlzLm9mZnNldCk7XG4gICAgICB0aGlzLl9lbGVtZW50Q2xhc3MucHVzaCgnY29sLW1kLW9mZnNldC0nICsgdGhpcy5vZmZzZXQpO1xuICAgIH1cblxuICAgIC8vIEFkZCBhbnkgY2xhc3NlcyBhZGRlZCBvbiB0aGlzIGVsZW1lbnRcbiAgICBmb3IgKGNvbnN0IF9jbGFzcyBvZiB0aGlzLmNsYXNzLnNwbGl0KCcgJykpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKF9jbGFzcyk7XG4gICAgfVxuICB9XG59XG4iXX0=