import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { AbstractComponent } from 'src/app/common/components/abstract.component';
import { ShoppingService } from '../../shopping.service';
import { ShoppingListModel } from '../shopping-list/shopping-list.component';

@Component({
  selector: 'squirrel-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.scss'],
})
export class ShoppingDetailsComponent extends AbstractComponent implements OnChanges {
  @Input() list: ShoppingListModel;
  form: FormGroup;

  get product() {
    return this.form.get('products') as FormArray;
  }

  constructor(private fb: FormBuilder, private service: ShoppingService) {
    super();
    this.noContentInfo = 'Nie wybrano listy zakupów.';
    this.sugestionInfo = 'Wybierz jedną z list, aby zobaczyć jej szczegóły.';

    this.form = this.fb.group({
      name: new FormControl(),
      creationDate: new FormControl({ disabled: true }),
      products: this.fb.array([])
    });
  }

  ngOnChanges() {
    this.product.clear();
    this.form.reset();
    if (this.list && this.list.products) {
      this.form.controls.name.setValue(this.list.name);
      this.form.controls.creationDate.setValue(new Date(this.list.creationDate));
      this.list.products.forEach(a => {
        this.product.push(this.fb.control(a));
      });
    }
  }

  add() {
    this.product.push(this.fb.control(''));
  }

  remove(controlName) {
    this.product.removeAt(controlName);
  }

  create(slide) {
    this.list && this.list.name ? this.service.editList(this.list.name, { ...this.form.getRawValue(), realized: slide.checked }) :
      this.service.createNewList(this.form.getRawValue());
  }

  toogleStatus(slide) {
    if (!slide.disabled) {
      slide.checked = !slide.checked;
    }
  }

}
