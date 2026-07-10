import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestrauntComponent } from './edit-restraunt.component';

describe('EditRestrauntComponent', () => {
  let component: EditRestrauntComponent;
  let fixture: ComponentFixture<EditRestrauntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRestrauntComponent]
    });
    fixture = TestBed.createComponent(EditRestrauntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
