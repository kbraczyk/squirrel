import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResourceService } from '@shared/resource/auth/auth.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'squirrel-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [AuthResourceService]
})
export class AuthComponent {
  public formType: AuthFormType = AuthFormType.login;

  public form = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)])
  });

  constructor(private authService: AuthResourceService, private notification: NotificationsService, private router: Router) { }

  auth() {
    const data = this.form.value;
    this.formType === AuthFormType.login ?
      this.authService.login(this.form.value).subscribe(token => {
        this.notification.success('', 'Zostałeś zalogowany, możesz kożystać ze wszystkich funckji.');
        this.router.navigate(['/recipes']);
      },
        error => this.notification.error('', error.error.message)) :
      this.authService.createUser(data).subscribe(token => {
        this.notification.success('', 'Konto zostało utworzone, możesz kożystać ze wszystkich funckji.');
        this.router.navigate(['/recipes']);
      },
        error => this.notification.error('', error.error.message));
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
