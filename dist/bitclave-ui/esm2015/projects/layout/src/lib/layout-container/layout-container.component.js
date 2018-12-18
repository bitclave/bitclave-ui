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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYml0Y2xhdmUvYml0Y2xhdmUtdWkvIiwic291cmNlcyI6WyJwcm9qZWN0cy9sYXlvdXQvc3JjL2xpYi9sYXlvdXQtY29udGFpbmVyL2xheW91dC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdEUsTUFBTTs7cUJBQ2EsRUFBRTs2QkFDTyxFQUFFOzs7OztJQUU1QixJQUNJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7O1FBRzVDLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakM7S0FDRjs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsMkJBQTJCOzthQUV0Qzs7O29CQUVFLEtBQUs7MkJBR0wsV0FBVyxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xheW91dC1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNsYXNzID0gJyc7XHJcbiAgcHJvdGVjdGVkIF9lbGVtZW50Q2xhc3MgPSBbXTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgZ2V0IGVsZW1lbnRDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRDbGFzcy5qb2luKCcgJyk7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goJ2NvbnRhaW5lcicpO1xyXG4gICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goJ2xheW91dC1jb250YWluZXInKTtcclxuXHJcbiAgICAvLyBBZGQgYW55IGNsYXNzZXMgYWRkZWQgb24gdGhpcyBlbGVtZW50XHJcbiAgICBmb3IgKGNvbnN0IF9jbGFzcyBvZiB0aGlzLmNsYXNzLnNwbGl0KCcgJykpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goX2NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19