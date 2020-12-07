import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { AnimationsDirective } from '@app/shared/directives/animations.directive';
import { EventService, EventSquirrel } from '@app/shared/service/event.service';
import { SessionService } from '@app/shared/service/session.service';
import { AuthResourceService } from '@shared/resource/auth/auth.service';
import { NotificationsService } from 'angular2-notifications';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'squirrel-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [AnimationsDirective.inOutAnimations]
})
export class AuthComponent extends AbstractComponent {
  public formType: AuthFormType = AuthFormType.login;

  public form = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(1)])
  });

  constructor(
    private authService: AuthResourceService,
    private notification: NotificationsService,
    private router: Router,
    private session: SessionService,
    private eventService: EventService,
  ) {
    super();
  }

  auth() {
    this.isLoading = true;
    this.formType === AuthFormType.login ?
      this.authService.login(this.form.value).pipe(finalize(() => this.isLoading = false)).subscribe(token => {
        this.successAuth('Zostałeś zalogowany, możesz kożystać ze wszystkich funckji.', token.access_token);
      },
        error => {
          this.notification.error(null, error.error.message);
        }
      ) : this.authService.createUser(this.form.value).pipe(finalize(() => this.isLoading = false)).subscribe(token => {
        this.successAuth('Konto zostało utworzone, możesz kożystać ze wszystkich funckji.', token.access_token);
      },
        error => this.notification.error(null, error.error.message));
  }

  private successAuth(message: string, token: string) {
    this.router.navigate(['/recipes']);
    this.notification.success(null, message);
    this.session.setSession(token);
    this.eventService.emitEvent(EventSquirrel.login);
  }

  changeFormType() {
    if (this.formType === AuthFormType.login) {
      this.formType = AuthFormType.registry;
      this.form.addControl('repeatPassword', new FormControl(null, [Validators.required]));
      this.form.addControl('email', new FormControl(null, [Validators.required, Validators.email]));
      this.form.addControl('firstName', new FormControl(null, [Validators.minLength(2)]));
      this.form.addControl('lastName', new FormControl(null, [Validators.minLength(2)]));
      this.form.addControl('showPersonalData', new FormControl());
    } else {
      this.formType = AuthFormType.login;
      Object.keys(this.form.controls).forEach(c => {
        if (c !== 'password' && c !== 'username') {
          this.form.removeControl(c);
        }
      });
    }
  }

}

enum AuthFormType {
  login,
  registry,
}
