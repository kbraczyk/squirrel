import { Component } from '@angular/core';
import { StorageService, storageType } from '@common/service/storage.service';

@Component({
  selector: 'squirrel-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public menuOpenState: boolean = false;
  public breadcrumb: { label: string, route: string };

  constructor(private storageService: StorageService) {
    this.storageService.setStorageType(storageType.locale);
    this.menuOpenState = this.storageService.get('menuState');
  }

  changeMenuState() {
    this.menuOpenState = !this.menuOpenState;
    this.storageService.set('menuState', this.menuOpenState);
  }
}
