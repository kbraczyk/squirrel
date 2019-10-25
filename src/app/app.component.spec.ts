import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './common/app-routing.module';
import { CalcKcalComponent } from './calc-kcal/calc-kcal.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './common/material.module';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {
      imports: [
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        CalcKcalComponent,
        HomeComponent,
        MenuComponent
      ],
    }
    ).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'squirrel'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('squirrel');
  });
});
