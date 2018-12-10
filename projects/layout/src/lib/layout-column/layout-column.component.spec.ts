import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutColumnComponent } from './layout-column.component';

 describe('LayoutColumnComponent', () => {
  let component: LayoutColumnComponent;
  let fixture: ComponentFixture<LayoutColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutColumnComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('offset should add class to element', () => {
    const offset = 4;
    component.offset = offset;
    component.ngOnInit();
    expect(component.elementClass.includes('col-xs-offset-' + offset)).toBe(true);
    expect(component.elementClass.includes('col-md-offset-' + offset)).toBe(true);
  });
  it('size should add class to element', () => {
    const size = 12;
    component.size = size;
    component.ngOnInit();
    expect(component.elementClass.includes('col-xs-' + size)).toBe(true);
    expect(component.elementClass.includes('col-md-' + size)).toBe(true);
  });
});
