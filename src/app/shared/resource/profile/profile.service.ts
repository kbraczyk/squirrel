import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource, RestService } from '@app/shared/service/rest.service';
import { UserProfile } from './profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileRestService extends RestService<UserProfile> {

  constructor(http: HttpClient) {
    super(http);
    this.resource = Resource.profile;
  }

  updateProfile(data: UserProfile) {
    return this.http.patch(this.baseUrl + this.resource, data);
  }
}
