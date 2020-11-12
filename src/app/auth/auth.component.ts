import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResourceService } from '@app/shared/resource/auth/auth.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'squirrel-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [AuthResourceService]
})
export class AuthComponent {
  public form = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(private authService: AuthResourceService, private notification: NotificationsService, private router: Router) { }

  auth() {
    const data = this.form.value;
    this.authService.login(this.form.value).subscribe(token => {
      this.notification.success('', 'Zostałeś zalogowany, możesz kożystać ze wszystkich funckji ;)');
      this.router.navigate(['/recipes']);
    },
      error => this.notification.error('', error.error.message));
  }


}
