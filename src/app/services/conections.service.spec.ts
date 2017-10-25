import { TestBed, inject } from '@angular/core/testing';

import { ConectionsService } from './conections.service';

describe('ConectionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConectionsService]
    });
  });

  it('should be created', inject([ConectionsService], (service: ConectionsService) => {
    expect(service).toBeTruthy();
  }));
});
