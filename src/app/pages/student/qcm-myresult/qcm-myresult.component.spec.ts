import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmMyresultComponent } from './qcm-myresult.component';

describe('QcmMyresultComponent', () => {
  let component: QcmMyresultComponent;
  let fixture: ComponentFixture<QcmMyresultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcmMyresultComponent]
    });
    fixture = TestBed.createComponent(QcmMyresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
