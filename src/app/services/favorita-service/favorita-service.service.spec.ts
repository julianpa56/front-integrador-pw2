import { TestBed } from '@angular/core/testing';

import { FavoritaServiceService } from './favorita-service.service';

describe('FavoritaServiceService', () => {
  let service: FavoritaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
