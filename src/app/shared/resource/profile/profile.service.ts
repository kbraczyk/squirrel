import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource, RestService } from '@app/shared/service/rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileRestService extends RestService<any> {

  constructor(http: HttpClient) {
    super(http);
    this.resource = Resource.profile;
  }
}
