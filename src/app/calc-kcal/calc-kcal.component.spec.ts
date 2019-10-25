import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcKcalComponent } from './calc-kcal.component';
import { MaterialModule } from '../common/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../common/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

describe('CalcKcalComponent', () => {
  let component: CalcKcalComponent;
  let fixture: ComponentFixture<CalcKcalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MaterialModule],
      declarations: [CalcKcalComponent, AppComponent,
      HomeComponent, MenuComponent, DashboardComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcKcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'squirrel'`, () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(CalcKcalComponent);
    const calc = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(calc.querySelector('#height').value).toBeLessThan(0);
  });
});
