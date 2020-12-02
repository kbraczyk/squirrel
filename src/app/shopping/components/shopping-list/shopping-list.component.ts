import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { ShopList } from '@app/shared/resource/shop-list/shop-list.interface';
import { ShopListResourceService } from '@app/shared/resource/shop-list/shop-list.service';
import { AbstractComponent } from '@shared/components/abstract.component';
import { finalize } from 'rxjs/operators';
import { ShoppingService } from '../../shopping.service';

@Component({
  selector: 'squirrel-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent extends AbstractComponent {
  public shoppingLists$ = this.resource.getAll().pipe(finalize(() => { this.isLoading = false; }));

  @Output('selected') selectedList = new EventEmitter<ShopList>();

  constructor(public service: ShoppingService, private resource: ShopListResourceService) {
    super();
    this.headerTitle = 'Listy zakupów ';
    this.headerSubtitle = 'czyli listy zakupów, które utworzyłeś';
    this.headerIcon = 'list';
    this.isLoading = true;
  }

  newList() {
    this.selectedList.emit({} as ShopList);
  }
}



