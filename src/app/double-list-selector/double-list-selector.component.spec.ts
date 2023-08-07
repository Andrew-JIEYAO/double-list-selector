import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleListSelectorComponent } from './double-list-selector.component';

describe('DoubleListSelectorComponent', () => {
  let component: DoubleListSelectorComponent;
  let fixture: ComponentFixture<DoubleListSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DoubleListSelectorComponent]
    });
    fixture = TestBed.createComponent(DoubleListSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
