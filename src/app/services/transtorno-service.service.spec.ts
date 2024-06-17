import { TestBed } from '@angular/core/testing';

import { TranstornoServiceService } from './transtorno-service.service';

describe('TranstornoServiceService', () => {
  let service: TranstornoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranstornoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
