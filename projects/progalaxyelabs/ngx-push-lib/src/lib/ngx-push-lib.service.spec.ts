import { TestBed } from '@angular/core/testing';

import { NgxPushLibService } from './ngx-push-lib.service';

describe('NgxPushLibService', () => {
  let service: NgxPushLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPushLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
