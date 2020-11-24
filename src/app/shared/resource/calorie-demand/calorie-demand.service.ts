import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource, RestService } from '@app/shared/service/rest.service';

@Injectable({
    providedIn: 'root'
})
export class CalorieDemandResourceService extends RestService {

    constructor(http: HttpClient) {
        super(http);
        this.resource = Resource.calorieDemand;
    }
}
