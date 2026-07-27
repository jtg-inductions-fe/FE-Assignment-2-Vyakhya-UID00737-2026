import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderCardComponent } from './order-card.component';

describe('OrderCardComponent', () => {
  let component: OrderCardComponent;
  let fixture: ComponentFixture<OrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit status changed on accepted', () => {
    spyOn(component.statusChange, 'emit');
    component.acceptOrder({});
    expect(component.statusChange.emit).toHaveBeenCalled();
  });

  it('should emit status changed on rejected', () => {
    spyOn(component.statusChange, 'emit');
    component.rejectOrder({});
    expect(component.statusChange.emit).toHaveBeenCalled();
  });
});
