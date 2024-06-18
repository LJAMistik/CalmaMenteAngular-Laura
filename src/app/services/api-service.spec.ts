import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiService } from './api-service';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [ApiService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a GET request', () => {
    const testData = { name: 'Test', email: 'test@example.com' };

    service.get('/users').subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne('http://localhost:9090/users');
    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });

  it('should send a POST request', () => {
    const testData = { name: 'Test', email: 'test@example.com' };

    service.post('/users', testData).subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne('http://localhost:9090/users');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(testData);

    req.flush(testData);
  });
});
