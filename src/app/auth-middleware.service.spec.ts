import { TestBed } from '@angular/core/testing';

import { AuthMiddlewareService } from './auth-middleware.service';

describe('AuthMiddlewareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthMiddlewareService = TestBed.get(AuthMiddlewareService);
    expect(service).toBeTruthy();
  });
});
