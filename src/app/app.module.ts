import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './common/app-routing.module';
import { MaterialModule } from './common/material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './common/components/tabs/tabs.component';
import { ProductTableComponent } from './products/product-table.component';
import { MatPaginatorIntl } from '@angular/material';
import { CustomPaginator } from './common/components/table/customPaginatorConfig';
import { StorageService } from './common/service/storage.service';
import { AvatarModule } from 'ngx-avatar';
import { NoContentComponent } from './common/components/no-content/no-content.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { CommonSquirrelModule } from './common/common.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    ProductTableComponent,
    TabsComponent,
    NoContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CommonSquirrelModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    AvatarModule,
    SimpleNotificationsModule.forRoot({
      position: ['top', 'right'],
      timeOut: 4000,
    })

  ],
  exports: [],
  providers: [
    StorageService,
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
