import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input.component';
import { QuantityService } from '../quantity.service';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        { provide: Router, useValue: mockRouter },
      ]
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke results', () => {
    component.displayResult();
    expect(mockRouter.navigate).toHaveBeenCalled();
  });

  it('should invoke validation', () => {
    const quantityService = TestBed.inject(QuantityService);
    spyOn(quantityService, 'isFinancialNumber');
    component.quantity.setValue('10m');
    expect(quantityService.isFinancialNumber).toHaveBeenCalled();
  })
});
