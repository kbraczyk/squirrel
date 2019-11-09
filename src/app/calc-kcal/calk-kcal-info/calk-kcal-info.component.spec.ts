import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalkKcalInfoComponent } from './calk-kcal-info.component';

describe('CalkKcalInfoComponent', () => {
  let component: CalkKcalInfoComponent;
  let fixture: ComponentFixture<CalkKcalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalkKcalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalkKcalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
