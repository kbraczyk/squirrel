import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource, RestService } from '@app/shared/service/rest.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginModel, UserCreateModel, UserLoginModel } from './auth.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthResourceService extends RestService {

    constructor(http: HttpClient) {
        super(http);
        this.resource = Resource.auth;
    }

    login(data: UserLoginModel): Observable<LoginModel> {
        return this.http.post<LoginModel>(this.baseUrl + this.resource + '/login', data);
    }

    createUser(data: UserCreateModel): Observable<any> {
        return this.http.post(this.baseUrl + this.resource + '/register', data);
    }
}
