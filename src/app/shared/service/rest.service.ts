import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SortDirection } from '@angular/material';
import { apiConfig } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService<T> {

  protected baseUrl: string = apiConfig.baseUrl;
  private _resource: Resource = null;

  constructor(public http: HttpClient) { }

  public getAll = (pager?: PageModel, sort?: SortModel): Observable<T> => {
    let url = this.baseUrl + this.resource;

    if (sort) {
      url = url + `?sort=${sort.direction === 'asc' ? '+' : '-'}${sort.field}`;
    }
    if (pager) {
      url = url + `?pageSize=${pager.perPage}&pageIndex=${pager.offset}`;
    }

    return this.http.get(url) as Observable<T>;
  }
  public getById = (id: number): Observable<any> => {
    return this.http.get(`${this.baseUrl + this.resource}/${id}`);
  }

  set resource(res: Resource) {
    if (res) {
      this._resource = res;
    }
  }
  get resource() {
    return this._resource;
  }

}

export enum Resource {
  fruits = 'fruits',
  vegetables = 'vegetables',
  protein = 'protein',
  fat = 'fats',
  carbo = 'carbo',
  auth = 'auth',
  calorieDemand = 'calorie_demand',
  profile = 'profile'
}

export class SortModel {
  field: string;
  direction: SortDirection;
}
export class PageModel {
  perPage: number;
  offset: number;
}
