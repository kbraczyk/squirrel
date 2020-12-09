import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { NotificationsService } from 'angular2-notifications';
import { AbstractComponent } from '@shared/components/abstract.component';
import { ShopList, ShopListProduct } from '@app/shared/resource/shop-list/shop-list.interface';
import { ShopListResourceService } from '@app/shared/resource/shop-list/shop-list.service';
import { EventService, EventSquirrel } from '@app/shared/service/event.service';

@Component({
  selector: 'squirrel-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ duration: 500 }),
  ],
})
export class ShoppingDetailsComponent extends AbstractComponent {
  shopList = null;
  form: FormGroup;
  removedIds: Array<number> = [];

  get products(): FormArray {
    return this.form.get('products') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private resource: ShopListResourceService,
    private notification: NotificationsService,
    private eventService: EventService) {
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
    this.sub.push(
      this.eventService.getEvent(EventSquirrel.newShopList).subscribe(event => {
        this.shopList = event.data;
        this.products.clear();
        this.form.reset();
        if (this.shopList && this.shopList.products) {
          this.form.controls.name.setValue(this.shopList.name);
          this.form.controls.created_date.setValue(new Date(this.shopList.created_date));
          this.shopList.products.forEach(a => {
            this.products.push(this.fb.control({ value: a.name, disabled: true }));
          });
        } else {
          this.form.controls.created_date.setValue(new Date());
        }
      }));
  }

  addProduct = () => this.products.push(this.fb.control(''));

  remove = (controlName) => {
    const finded: any = this.shopList.products.filter(f => f.name === this.products.controls[controlName].value)[0];
    if (finded) {
      this.removedIds.push(finded.id);
    }
    this.products.removeAt(controlName);
  }

  public createOrEdit = (slide: boolean) => {
    this.shopList && this.shopList.id ?
      this.resource.update(this.shopList.id, { ...this.form.value, isRealized: slide, removedProducts: this.removedIds })
        .subscribe(() => {
          this.removedIds = [];
          this.afterSucess('Zmodyfikowano listę zakupów');
        }) : this.resource.createNewList(this.form.getRawValue()).subscribe(() => this.afterSucess('Lista zakupów została utworzona.'));
  }

  public delete = () => this.resource.remove(this.shopList.id).subscribe(() => {
    this.afterSucess('Lista zakupów została usunięta');
  })

  private afterSucess(message: string) {
    this.shopList = null;
    this.notification.success(null, message);
    this.eventService.emitEvent(EventSquirrel.updateShopList);
  }

  toogleStatus(slide): void {
    if (!slide.disabled) {
      slide.checked = !slide.checked;
    }
  }
}
