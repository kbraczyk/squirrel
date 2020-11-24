import { Injectable } from '@angular/core';
import { StorageService, StorageType } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private storage: StorageService) {
    this.storage.setStorageType(StorageType.locale);
  }

  public setSession(token: string) {
    this.storage.set('token', token);
  }

  public clearSession() {
    this.storage.remove('token');
  }

  public getSessionToken(): string | null {
    return this.storage.get('token');
  }
}
