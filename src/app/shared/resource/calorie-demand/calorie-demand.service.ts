import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource, RestService } from '@app/shared/service/rest.service';
import { CalorieDemandModel } from './calorie-demand.interface';

@Injectable({
    providedIn: 'root'
})
export class CalorieDemandResourceService extends RestService<CalorieDemandModel> {

    constructor(http: HttpClient) {
        super(http);
        this.resource = Resource.calorieDemand;
    }
}
