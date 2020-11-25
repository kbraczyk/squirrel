import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileRestService } from '@app/shared/resource/profile/profile.service';

@Component({
  selector: 'squirrel-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public form = new FormGroup({
    username: new FormControl({ value: null, disabled: true }),
    email: new FormControl({ value: null, disabled: true }),
    firstName: new FormControl({ value: null, disabled: true }),
    lastName: new FormControl({ value: null, disabled: true }),
    showPersonalData: new FormControl({ value: null, disabled: true })
  });

  constructor(private profileService: ProfileRestService) { }

  ngOnInit() {
    this.profileService.getAll().subscribe(data => {
      data = { ...data, ...data.user };
      Object.keys(this.form.controls).forEach(control => {
        this.form.controls[control].setValue(data[control]);
      });
    });
  }

}
