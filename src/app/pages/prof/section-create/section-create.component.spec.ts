import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCreateComponent } from './section-create.component';

describe('SectionCreateComponent', () => {
  let component: SectionCreateComponent;
  let fixture: ComponentFixture<SectionCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCreateComponent]
    });
    fixture = TestBed.createComponent(SectionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
