import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestrauntComponent } from './list-restraunt.component';

describe('ListRestrauntComponent', () => {
  let component: ListRestrauntComponent;
  let fixture: ComponentFixture<ListRestrauntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRestrauntComponent]
    });
    fixture = TestBed.createComponent(ListRestrauntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
