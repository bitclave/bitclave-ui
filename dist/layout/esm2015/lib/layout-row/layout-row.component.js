/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
export class LayoutRowComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0LXJvdy9sYXlvdXQtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3RFLE1BQU07O3FCQUNhLEVBQUU7NkJBR2lCLEVBQUU7Ozs7O0lBS3RDLElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDckM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs7UUFHdEMsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQztLQUNGOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsMkJBQTJCOzthQUV0Qzs7O29CQUVFLEtBQUs7c0JBQ0wsS0FBSzswQkFJTCxXQUFXLFNBQUMsb0JBQW9COzJCQUNoQyxXQUFXLFNBQUMscUJBQXFCOzJCQUVqQyxXQUFXLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGF5b3V0LXJvdycsXHJcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtcm93LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dFJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgY2xhc3MgPSAnJztcclxuICBASW5wdXQoKSBwYWRkaW5nOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBfZWxlbWVudENsYXNzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdCcpIHBhZGRpbmdMZWZ0O1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1yaWdodCcpIHBhZGRpbmdSaWdodDtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgZ2V0IGVsZW1lbnRDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRDbGFzcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucGFkZGluZ0xlZnQgPSB0aGlzLnBhZGRpbmc7XHJcbiAgICB0aGlzLnBhZGRpbmdSaWdodCA9IHRoaXMucGFkZGluZztcclxuICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKCdyb3cnKTtcclxuICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKCdsYXlvdXQtcm93Jyk7XHJcblxyXG4gICAgLy8gQWRkIGFueSBjbGFzc2VzIGFkZGVkIG9uIHRoaXMgZWxlbWVudFxyXG4gICAgZm9yIChjb25zdCBfY2xhc3Mgb2YgdGhpcy5jbGFzcy5zcGxpdCgnICcpKSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnRDbGFzcy5wdXNoKF9jbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==