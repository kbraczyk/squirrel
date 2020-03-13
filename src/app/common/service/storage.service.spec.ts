import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

let service: StorageService;

describe('StorageService', () => {
  beforeEach(() => {service = new StorageService()});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('storage type should be a session', () => {
      expect(service.storage).toBeDefined();
  });

  it('set method should set session storage item', () => {
      service.set('test', 'test');
      expect(window.sessionStorage.getItem('test')).not.toBeNull();
  });

  // it('get method should return value from sessionStorage', () => {
  //   expect(service.get('test')).not.toEqual(null);
  // });

  it('remove method should delete the enry from storage memory', () => {
    service.remove('test');
    expect(service.get('test')).toBeNull();
  });

  it('clear method should clear all data in storage', () => {
      service.set('test', 'test');
      service.set('test2', 'test2');
      expect(service.get('test') && service.get('test2')).not.toBeNull();
      service.clear();
      expect(service.get('test') && service.get('test2')).toEqual(null);
  });

});
