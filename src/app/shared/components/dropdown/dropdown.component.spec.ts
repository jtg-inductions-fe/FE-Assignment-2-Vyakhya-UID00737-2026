import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update selectedValue on selection change', () => {
    component.onSelectionChange('selected');
    expect(component.selectedValue).toBe('selected');
  });

  it('should emit selectedValue change on selection change', () => {
    spyOn(component.selectedValueChange, 'emit');
    component.onSelectionChange('selected');
    expect(component.selectedValueChange.emit).toHaveBeenCalledWith('selected');
  });
});
