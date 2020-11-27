import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  private _storage: Window[StorageType.locale | StorageType.session] = null;

  get storage() {
    return this._storage;
  }
  constructor() {
    this.setStorageType();
  }

  public setStorageType(type: StorageType = StorageType.session) {
    this._storage = window[type];
  }

  public set(key: string, value: any) {
    if (!key || !value) {
      return;
    }
    this.storage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
  }

  public get(key: string) {
    const value = this.storage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  public remove(key: string) {
    this.storage.removeItem(key);
  }

  public clear() {
    this.storage.clear();
  }

}

export enum StorageType {
  locale = 'localStorage',
  session = 'sessionStorage'
}
