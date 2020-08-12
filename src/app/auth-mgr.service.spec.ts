import { TestBed } from '@angular/core/testing';

import { AuthMgrService } from './auth-mgr.service';

describe('AuthMgrService', () => {
  let service: AuthMgrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthMgrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
