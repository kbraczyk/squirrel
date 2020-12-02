import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { NotificationsService } from 'angular2-notifications';
import { AbstractComponent } from '@shared/components/abstract.component';
import { ShopList, ShopListProduct } from '@app/shared/resource/shop-list/shop-list.interface';
import { ShopListResourceService } from '@app/shared/resource/shop-list/shop-list.service';

@Component({
  selector: 'squirrel-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ duration: 500 }),
  ],
})
export class ShoppingDetailsComponent extends AbstractComponent implements OnChanges {

  @Input() list: ShopList;
  form: FormGroup;

  removedIds: Array<number> = [];

  get products(): FormArray {
    return this.form.get('products') as FormArray;
  }

  constructor(private fb: FormBuilder, private resource: ShopListResourceService, private notification: NotificationsService) {
    super();
    this.headerTitle = 'Szczegóły Listy zakupów';
    this.headerSubtitle = `Sekcja umożliwia wykonywanie akcji na liście zakupów. Z tego miejsca możesz dodać, edytować lub
    przeglądnąć szczegóły wybranej listy zakupów.`;
    this.headerIcon = 'list';
    this.noContentInfo = 'Nie wybrano listy zakupów.';
    this.sugestionInfo = 'Wybierz jedną z list, aby zobaczyć jej szczegóły.';

    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      created_date: new FormControl({ value: null, disabled: true }),
      products: this.fb.array([])
    });
  }

  ngOnChanges() {
    this.products.clear();
    this.form.reset();
    if (this.list && this.list.products) {
      this.form.controls.name.setValue(this.list.name);
      this.form.controls.created_date.setValue(new Date(this.list.created_date));
      this.list.products.forEach(a => {
        this.products.push(this.fb.control({ value: a.name, disabled: true }));
      });
    } else {
      this.form.controls.created_date.setValue(new Date());
    }
  }

  addProduct = () => this.products.push(this.fb.control(''));
  remove = (controlName) => {
    const finded: any = this.list.products.filter(f => f.name === this.products.controls[controlName].value)[0];
    if (finded) {
      this.removedIds.push(finded.id);
    }
    this.products.removeAt(controlName);
  }
  createOrEdit = (slide) => {
    this.resource.update(this.list.id, { ...this.form.value, removedProducts: this.removedIds }).subscribe(data => {
      this.removedIds = [];
      this.notification.success('', 'Nowa lista zakupów została dodana');
    });
  }

  toogleStatus(slide): void {
    if (!slide.disabled) {
      slide.checked = !slide.checked;
    }
  }
}
