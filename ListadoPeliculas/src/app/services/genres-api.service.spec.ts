import { TestBed } from '@angular/core/testing';

import { GenresApiService } from './genres-api.service';

describe('GenresApiService', () => {
  let service: GenresApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenresApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
