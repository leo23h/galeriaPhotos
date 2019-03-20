import { TestBed } from '@angular/core/testing';

import { AlbumDetailService } from './album-detail.service';

describe('AlbumDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumDetailService = TestBed.get(AlbumDetailService);
    expect(service).toBeTruthy();
  });
});
