import { TestBed } from '@angular/core/testing';

import { NegoziServiceService } from './negozi-service.service';

describe('NegoziServiceService', () => {
  let service: NegoziServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NegoziServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
