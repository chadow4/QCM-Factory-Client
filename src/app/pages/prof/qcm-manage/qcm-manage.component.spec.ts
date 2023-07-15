import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmManageComponent } from './qcm-manage.component';

describe('QcmManageComponent', () => {
  let component: QcmManageComponent;
  let fixture: ComponentFixture<QcmManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcmManageComponent]
    });
    fixture = TestBed.createComponent(QcmManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
