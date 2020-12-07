import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { ProfileRestService } from '@app/shared/resource/profile/profile.service';
import { NotificationsService } from 'angular2-notifications';
import { filter, finalize, map } from 'rxjs/operators';

@Component({
  selector: 'squirrel-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends AbstractComponent implements OnInit {
  fileToUpload: File = null;
  avatarPreview = '';

  public form = new FormGroup({
    username: new FormControl({ value: null, disabled: true }, [Validators.required, Validators.minLength(3)]),
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
    this.getProfileData();
  }

  updateData() {
    this.isLoading = true;
    this.profileService.updateProfile(this.form.value).pipe(finalize(() => this.isLoading = false))
      .subscribe(() => this.growl.success(null, 'Dane zostały pomyślnie zmodyfikowane'),
        error => this.growl.error(null, 'Błąd podczas edytowania danych')
      );
  }

  getProfileData() {
    this.profileService.getAll().pipe(
      filter(data => !!data),
      map(data => ({ ...data, ...data.user })),
      finalize(() => this.isLoading = false))
      .subscribe(data => {
        Object.keys(this.form.controls).forEach(control => {
          this.form.controls[control].setValue(data[control]);
        });
      });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.preview();
  }

  preview() {
    const mimeType = this.fileToUpload.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    reader.onload = (_event) => {
      this.avatarPreview = reader.result as string;
    };
  }

  uploadFileToActivity() {
    this.profileService.changeAvatar(this.fileToUpload).subscribe(data => {
      console.log('RARA');
    }, error => {
      console.log(error);
    });
  }
}