import { TestBed } from '@angular/core/testing';

import { AuthRoleService } from '../services/authrole.service';

describe('AuthroleService', () => {
  let service: AuthRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
