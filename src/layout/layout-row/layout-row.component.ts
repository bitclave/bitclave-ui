import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'layout-row',
  template: '<ng-content></ng-content>',
  styleUrls: ['./layout-row.component.scss']
})
export class LayoutRowComponent implements OnInit {
  @Input() class = '';
  @Input() padding: string;

  protected _elementClass: string[] = [];

  @HostBinding('style.padding-left') protected paddingLeft;
  @HostBinding('style.padding-right') protected paddingRight;

  @HostBinding('class')
  get elementClass(): string {
    return this._elementClass.join(' ');
  }

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
