/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
export class LayoutContainerComponent {
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
if (false) {
    /** @type {?} */
    LayoutContainerComponent.prototype.class;
    /** @type {?} */
    LayoutContainerComponent.prototype._elementClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0LWNvbnRhaW5lci9sYXlvdXQtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3RFLE1BQU07O3FCQUNhLEVBQUU7NkJBQ08sRUFBRTs7Ozs7SUFFNUIsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNyQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOztRQUc1QyxLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO0tBQ0Y7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLDJCQUEyQjs7YUFFdEM7OztvQkFFRSxLQUFLOzJCQUdMLFdBQVcsU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsYXlvdXQtY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gIHN0eWxlVXJsczogWycuL2xheW91dC1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjbGFzcyA9ICcnO1xyXG4gIHByb3RlY3RlZCBfZWxlbWVudENsYXNzID0gW107XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxyXG4gIGdldCBlbGVtZW50Q2xhc3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50Q2xhc3Muam9pbignICcpO1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKCdjb250YWluZXInKTtcclxuICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKCdsYXlvdXQtY29udGFpbmVyJyk7XHJcblxyXG4gICAgLy8gQWRkIGFueSBjbGFzc2VzIGFkZGVkIG9uIHRoaXMgZWxlbWVudFxyXG4gICAgZm9yIChjb25zdCBfY2xhc3Mgb2YgdGhpcy5jbGFzcy5zcGxpdCgnICcpKSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKF9jbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==