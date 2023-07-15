import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmCreateComponent } from './qcm-create.component';

describe('QcmCreateComponent', () => {
  let component: QcmCreateComponent;
  let fixture: ComponentFixture<QcmCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcmCreateComponent]
    });
    fixture = TestBed.createComponent(QcmCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
