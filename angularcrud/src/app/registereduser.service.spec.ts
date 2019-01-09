import { TestBed, inject } from '@angular/core/testing';

import { RegistereduserService } from './registereduser.service';

describe('RegistereduserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistereduserService]
    });
  });

  it('should be created', inject([RegistereduserService], (service: RegistereduserService) => {
    expect(service).toBeTruthy();
  }));
});
