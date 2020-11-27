import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { UserProfile } from '@app/shared/resource/profile/profile.interface';
import { ProfileRestService } from '@app/shared/resource/profile/profile.service';
import { NotificationsService } from 'angular2-notifications';
import { filter, finalize, map } from 'rxjs/operators';

@Component({
  selector: 'squirrel-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends AbstractComponent implements OnInit {

  public form = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.email]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    showPersonalData: new FormControl()
  });

  constructor(private profileService: ProfileRestService, private growl: NotificationsService) {
    super();
    this.headerIcon = 'person_outline';
    this.headerTitle = 'Profil użytkownika';
    this.headerSubtitle = 'Informacje o twoim profilu';
    this.isLoading = true;
  }

  ngOnInit() {
    this.profileService.getAll().pipe(finalize(() => this.isLoading = false))
      .subscribe(data => {
        data = { ...data, ...data.user };
        Object.keys(this.form.controls).forEach(control => {
          this.form.controls[control].setValue(data[control]);
        });
      });
  }

  updateData() {
    this.isLoading = true;
    this.profileService.updateProfile(this.form.value).pipe(finalize(() => this.isLoading = false))
      .subscribe(() => this.growl.success(null, 'Dane zostały pomyślnie zmodyfikowane'),
        error => this.growl.error(null, 'Błąd podczas edytowania danych')
      );
  }
}
