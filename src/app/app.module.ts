import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductTableComponent } from './products/product-table.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { AvatarModule } from 'ngx-avatar';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoContentComponent } from '@shared/components/no-content/no-content.component';
import { SharedSquirrelModule } from '@shared/shared.module';
import { AppRoutingModule } from '@shared/app-routing.module';
import { MaterialModule } from '@shared/material.module';
import { StorageService } from '@shared/service/storage.service';
import { CustomPaginator } from '@shared/components/table/customPaginatorConfig';
import { TabsComponent } from '@shared/components/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    ProductTableComponent,
    AppComponent,
    NoContentComponent,
    TabsComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedSquirrelModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
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
