import { TestBed } from '@angular/core/testing';

import { ImageDetailService } from './image-detail.service';

describe('ImageDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageDetailService = TestBed.get(ImageDetailService);
    expect(service).toBeTruthy();
  });
});
