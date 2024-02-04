import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
    quantity = new FormControl('', [Validators.required, this.quantityValidator()]);

    constructor(private router: Router, private quantityService: QuantityService) {}

    quantityValidator() {
      return (control: AbstractControl): ValidationErrors | null => {
        return this.quantityService.isFinancialNumber(control.value) ? null : { quantity: true };
      }
    }

    displayResult() {
      this.router.navigate(['/result'], {
        queryParams: { quantity: this.quantity.value?.trim() }
      });
    }
}
