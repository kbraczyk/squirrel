import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource, RestService } from '@app/shared/service/rest.service';
import { ShopList } from './shop-list.interface';

@Injectable({
    providedIn: 'root'
})
export class ShopListResourceService extends RestService<ShopList> {

    constructor(http: HttpClient) {
        super(http);
        this.resource = Resource.shopList;
    }

    public createNewList(data) {
        return this.http.post(this.baseUrl + this.resource, data);
    }

    public update(listId: number, data) {
        return this.http.patch(this.baseUrl + this.resource + '/' + String(listId), data);
    }

    public remove(listId: number) {
        return this.http.delete(this.baseUrl + this.resource + `/${String(listId)}`);
    }
}
