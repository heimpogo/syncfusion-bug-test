import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTemplateComponent } from './filter-template.component';

xdescribe('FilterTemplateComponent', () => {
  let component: FilterTemplateComponent;
  let fixture: ComponentFixture<FilterTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTemplateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
