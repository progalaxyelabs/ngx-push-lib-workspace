import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPushLibComponent } from './ngx-push-lib.component';

describe('NgxPushLibComponent', () => {
  let component: NgxPushLibComponent;
  let fixture: ComponentFixture<NgxPushLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxPushLibComponent]
    });
    fixture = TestBed.createComponent(NgxPushLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
