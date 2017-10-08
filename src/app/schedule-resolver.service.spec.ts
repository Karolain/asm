import { TestBed, inject } from '@angular/core/testing';

import { ScheduleResolverService } from './schedule-resolver.service';

describe('ScheduleResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduleResolverService]
    });
  });

  it('should be created', inject([ScheduleResolverService], (service: ScheduleResolverService) => {
    expect(service).toBeTruthy();
  }));
});
