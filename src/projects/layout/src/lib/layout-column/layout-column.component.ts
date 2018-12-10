import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'layout-column',
  template: '<ng-content></ng-content>',
  styleUrls: ['./layout-column.component.scss']
})
export class LayoutColumnComponent implements OnInit {
  @Input() size: number;
  @Input() offset: number;
  @Input() class = '';

  protected _elementClass: string[] = [];

  @HostBinding('class')
  get elementClass(): string {
    return this._elementClass.join(' ');
  }
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
