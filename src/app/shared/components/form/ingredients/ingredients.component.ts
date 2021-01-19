import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'squirrel-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IngredientsInputComponent),
      multi: true
    }
  ]
})
export class IngredientsInputComponent implements ControlValueAccessor {
  public name: string;
  public quantity: number;
  public selectedUnit: string = 'g';
  public unitOptions = ['ml', 'l', 'g', 'kg'];
  _value;

  constructor() { }

  writeValue(value: any) {
    if (value !== undefined) {
      this._value = value;
      this.propagateChange(this._value);
    }
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }

  addEvent($event) {
    this._value = {
      name: this.name,
      quantity: Number(this.quantity),
      unit: this.selectedUnit
    };
    this.propagateChange(this._value);
  }

  get value() {
    return this._value;
  }
  set value(val: { name: string, quantity: number, unit: any }) {
    if (val) {
      this._value = val;
      this.name = val.name;
      this.selectedUnit = val.unit;
      this.quantity = val.quantity;
      this.propagateChange(this._value);
    }
  }
}
