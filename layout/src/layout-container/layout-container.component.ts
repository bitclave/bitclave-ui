import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'layout-container',
  template: '<ng-content></ng-content>',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit {
  @Input() class = '';
  protected _elementClass = [];

  @HostBinding('class')
  get elementClass(): string {
    return this._elementClass.join(' ');
  }
  ngOnInit() {
    this._elementClass.push('container');
    this._elementClass.push('layout-container');

    // Add any classes added on this element
    for (const _class of this.class.split(' ')) {
      this._elementClass.push(_class);
    }
  }
}
