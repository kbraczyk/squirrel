import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  private storage: Window[storageType.locale | storageType.session] = null;

  constructor() {
    this.setStorageType();
   }

   public setStorageType(type: storageType = storageType.session) {
     this.storage = window[type];
   }

  public set(key: string, value: any) {
    if (!key || !value) {
      return;
    }
    this.storage.setItem(key, JSON.stringify(value));
  }

  public get(key: string) {
   const value =  this.storage.getItem(key);
   return value ? JSON.parse(value) : null;
  }

  public remove(key: string) {
    this.storage.removeItem(key);
  }

  public clear() {
    this.storage.clear();
  }

}

export enum storageType {
  locale =  'localStorage',
  session = 'sessionStorage'
}
