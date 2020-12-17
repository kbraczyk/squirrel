import { Component, OnDestroy } from '@angular/core';
import { ShopListResourceService } from '@app/shared/resource/shop-list/shop-list.service';
import { EventService, EventSquirrel } from '@app/shared/service/event.service';
import { SessionService } from '@app/shared/service/session.service';
import { AbstractComponent } from '@shared/components/abstract.component';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ShoppingService } from '../../shopping.service';

@Component({
  selector: 'squirrel-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent extends AbstractComponent implements OnDestroy {
  public shoppingLists$ = new BehaviorSubject(null);
  public userExist = this.session.sessionExist();

  constructor(
    public session: SessionService,
    private resource: ShopListResourceService,
    private eventService: EventService
  ) {
    super();
    this.headerTitle = 'Listy zakupów ';
    this.headerSubtitle = 'czyli listy zakupów, które utworzyłeś';
    this.headerIcon = 'list';
    this.noContentInfo = 'Zalogowani użytkownicy mogą przegladać listy';
    this.sugestionInfo = 'Zaloguj się by móc dodawać i przeglądać poprzednio dodane listy';
    this.isLoading = true;

    this.resource.getAll().pipe(
      finalize(() => this.isLoading = false))
      .subscribe(data => this.shoppingLists$.next(data));

    this.sub.push(this.eventService.getEvent(EventSquirrel.updateShopList).subscribe(() => this.getListData()));
  }

  ngOnDestroy() { super.ngOnDestroy(); }

  setListData(data?: any) {
    this.eventService.emitEvent(EventSquirrel.newShopList, data ? data : {});
  }

  getListData() {
    this.resource.getAll().pipe(
      finalize(() => this.isLoading = false))
      .subscribe(data => this.shoppingLists$.next(data));
  }

}



