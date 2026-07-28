import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { ChipInputComponent } from './chip-input.component';
import { MatChipInputEvent } from '@angular/material/chips';

describe('ChipInputComponent', () => {
  let component: ChipInputComponent;
  let fixture: ComponentFixture<ChipInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipInputComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit chips change', () => {
    component.control = new FormControl<string[] | null>([]);
    spyOn(component.chipsChange, 'emit');
    component.removeChip('');
    expect(component.chipsChange.emit).toHaveBeenCalled();
  });
});
