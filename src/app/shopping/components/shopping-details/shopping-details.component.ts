import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { NotificationsService } from 'angular2-notifications';
import { AbstractComponent } from '@shared/components/abstract.component';
import { ShoppingService } from '../../shopping.service';
import { ShoppingListModel } from '../shopping-list/shopping-list.component';

@Component({
  selector: 'squirrel-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ duration: 500 }),
  ],
})
export class ShoppingDetailsComponent extends AbstractComponent implements OnChanges {

  @Input() list: ShoppingListModel;
  form: FormGroup;

  get product(): FormArray {
    return this.form.get('products') as FormArray;
  }

  constructor(private fb: FormBuilder, private service: ShoppingService, private notification: NotificationsService) {
    super();
    this.noContentInfo = 'Nie wybrano listy zakupów.';
    this.sugestionInfo = 'Wybierz jedną z list, aby zobaczyć jej szczegóły.';

    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
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

  addProduct = () => this.product.push(this.fb.control(''));
  remove = (controlName) => this.product.removeAt(controlName);
  createOrEdit = (slide) => {
    if (this.form.valid) {
      this.list && this.list.name ?
        this.service.editList(this.list.name, { ...this.form.getRawValue(), realized: slide.checked }) :
        this.service.createNewList(this.form.getRawValue());
      this.notification.success('', this.list && this.list.name ?
        'Edycja listy zakupów zakończona pomyślnie' : 'Nowa lista zakupów została dodana');
    }
  }

  toogleStatus(slide): void {
    if (!slide.disabled) {
      slide.checked = !slide.checked;
    }
  }

}
