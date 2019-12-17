import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SortDirection } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  private baseUrl: string = ' http://localhost:3000';
  private resource: Resource;

  constructor(private http: HttpClient) {}

  public getAll = (sort?: SortModel): Observable<any> => {
    let url = this.baseUrl + this.resource;
    if (sort) {
      url = url + `?sort=${sort.direction === 'asc' ? '+' : '-'}${sort.field}`;
    }
    return this.http.get(url);
  }
  public getById = (id: number): Observable<any> => {
    return this.http.get(`${this.baseUrl + this.resource}/${id}`);
  }

  public setResource = (res: Resource) => {
    this.resource = res;
  }
  public getResource = () => {
    return this.resource;
  }

}

export enum Resource {
  fruits = '/fruits',
  vegetables = '/vegetables',
  protein = '/protein',
  fat = '/fat',
  carbo = '/carbo'
}

export class SortModel {
    field: string;
    direction: SortDirection;
}
