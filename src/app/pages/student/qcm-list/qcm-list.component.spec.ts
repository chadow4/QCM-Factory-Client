import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmListComponent } from './qcm-list.component';

describe('QcmListComponent', () => {
  let component: QcmListComponent;
  let fixture: ComponentFixture<QcmListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcmListComponent]
    });
    fixture = TestBed.createComponent(QcmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
