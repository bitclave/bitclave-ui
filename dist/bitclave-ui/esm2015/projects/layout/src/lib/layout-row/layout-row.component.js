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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYml0Y2xhdmUvYml0Y2xhdmUtdWkvIiwic291cmNlcyI6WyJwcm9qZWN0cy9sYXlvdXQvc3JjL2xpYi9sYXlvdXQtcm93L2xheW91dC1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdEUsTUFBTTs7cUJBQ2EsRUFBRTs2QkFHaUIsRUFBRTs7Ozs7SUFLdEMsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNyQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOztRQUd0QyxLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO0tBQ0Y7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSwyQkFBMkI7O2FBRXRDOzs7b0JBRUUsS0FBSztzQkFDTCxLQUFLOzBCQUlMLFdBQVcsU0FBQyxvQkFBb0I7MkJBQ2hDLFdBQVcsU0FBQyxxQkFBcUI7MkJBRWpDLFdBQVcsU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsYXlvdXQtcm93JyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gIHN0eWxlVXJsczogWycuL2xheW91dC1yb3cuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0Um93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgpIHBhZGRpbmc6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIF9lbGVtZW50Q2xhc3M6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1sZWZ0JykgcGFkZGluZ0xlZnQ7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLXJpZ2h0JykgcGFkZGluZ1JpZ2h0O1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBnZXQgZWxlbWVudENsYXNzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudENsYXNzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYWRkaW5nTGVmdCA9IHRoaXMucGFkZGluZztcclxuICAgIHRoaXMucGFkZGluZ1JpZ2h0ID0gdGhpcy5wYWRkaW5nO1xyXG4gICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goJ3JvdycpO1xyXG4gICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goJ2xheW91dC1yb3cnKTtcclxuXHJcbiAgICAvLyBBZGQgYW55IGNsYXNzZXMgYWRkZWQgb24gdGhpcyBlbGVtZW50XHJcbiAgICBmb3IgKGNvbnN0IF9jbGFzcyBvZiB0aGlzLmNsYXNzLnNwbGl0KCcgJykpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudENsYXNzLnB1c2goX2NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19