import { TestBed, async, inject } from '@angular/core/testing';

import { RestService, Resource } from './rest.service';
import { HttpClientModule, } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';

describe('RestService', () => {
  let service: RestService;
  // const httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RestService]
    });
    // injector = getTestBed();
    service = TestBed.get(RestService);
    // httpMock = injector.get(HttpClientTestingModule);
  });

  it('should be create', () => {
    // tslint:disable-next-line: no-shadowed-variable
    const service = TestBed.get(RestService);
    expect(service).toBeTruthy();
  });

  it('resource should be null before initialize', () => {
    expect(service.getResource()).toBeNull();
  });

  it('#setResource should change resource', () => {
    const oldResource = service.getResource();
    service.setResource(Resource.fruits);
    expect('/fruits').not.toEqual(oldResource);
    expect('/fruits').toEqual(service.getResource());
  });

  it('#getAll should return data', async(inject([RestService], (rest: RestService) => {
    rest.setResource(Resource.fruits);
    rest.getAll().toPromise().then(data =>
      expect(data.data.length).not.toEqual(0)
    );
  })));

  it('#getById should return one item for resource', async(inject([RestService], (rest: RestService) => {
    rest.setResource(Resource.fruits);
    rest.getById(1).toPromise().then(data => {
      expect(data.data.length).toEqual(1);
    });
  })));
});
