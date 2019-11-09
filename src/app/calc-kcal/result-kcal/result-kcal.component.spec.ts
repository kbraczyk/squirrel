import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultKcalComponent } from './result-kcal.component';

describe('ResultKcalComponent', () => {
  let component: ResultKcalComponent;
  let fixture: ComponentFixture<ResultKcalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultKcalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultKcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
