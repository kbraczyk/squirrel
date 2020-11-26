import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { UserProfile } from '@app/shared/resource/profile/profile.interface';
import { ProfileRestService } from '@app/shared/resource/profile/profile.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'squirrel-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends AbstractComponent implements OnInit {

  public form = new FormGroup({
    username: new FormControl({ value: null }, [Validators.required, Validators.minLength(3)]),
    email: new FormControl({ value: null }, [Validators.email]),
    firstName: new FormControl({ value: null }, [Validators.required]),
    lastName: new FormControl({ value: null }, [Validators.required]),
    showPersonalData: new FormControl({ value: null })
  });

  constructor(private profileService: ProfileRestService, private growl: NotificationsService) {
    super();
    this.headerIcon = 'person_outline';
    this.headerTitle = 'Profil użytkownika';
    this.headerSubtitle = 'Informacje o twoim profilu';
  }

  ngOnInit() {
    this.profileService.getAll().subscribe(data => {
      data = { ...data, ...data.user };
      Object.keys(this.form.controls).forEach(control => {
        this.form.controls[control].setValue(data[control]);
      });
    });
  }

  updateData() {
    const data = this.form.getRawValue();

    this.profileService.updateProfile(data).subscribe(
      () => this.growl.success('', 'Dane zostały pomyślnie zmodyfikowane'),
      error => this.growl.error('', 'Błąd podczas edytowania danych')
    );
  }
}
