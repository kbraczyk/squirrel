import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFormComponent } from './error-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, Validators } from '@angular/forms';

describe('ErrorFormComponent', () => {
  let component: ErrorFormComponent;
  let fixture: ComponentFixture<ErrorFormComponent>;

  const control: FormControl = new FormControl('',
    [
      Validators.required,
      Validators.max(250),
      Validators.min(10),
      Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')
    ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule],
      declarations: [ErrorFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorFormComponent);
    component = fixture.componentInstance;
    component.control = control;
    component.control.reset();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mat-error should no has error context', () => {
    expect((fixture.nativeElement as HTMLElement).textContent).toBe('');
  });

  it('mat-error should have max error context', () => {
    component.control.setValue(300);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Wartość nie może być większa');
  });

  it('mat-error should have min error context', () => {
    component.control.setValue(0);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Wartość nie może być mniejsza');
  });

  it('mat-error should have pattern error context', () => {
    component.control.setValue('test');
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Wartość musi być cyfrą');
  });

  it('mat-error should have require error context', () => {
    component.control.markAsTouched();
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Pole jest obowiązkowe!');
  });

});
