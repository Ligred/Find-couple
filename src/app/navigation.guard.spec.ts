import { TestBed, inject } from '@angular/core/testing';

import { NavigationGuard } from './navigation.guard';

describe('ThemeGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationGuard]
    });
  });

  it('should ...', inject([NavigationGuard], (guard: NavigationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
