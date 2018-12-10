import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutColumnComponent } from './layout-column/layout-column.component';
import { LayoutRowComponent } from './layout-row/layout-row.component';
import { LayoutContainerComponent } from './layout-container/layout-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LayoutColumnComponent,
    LayoutRowComponent,
    LayoutContainerComponent
  ],
  declarations: [
    LayoutColumnComponent,
    LayoutRowComponent,
    LayoutContainerComponent
  ]
})
export class LayoutModule { }
