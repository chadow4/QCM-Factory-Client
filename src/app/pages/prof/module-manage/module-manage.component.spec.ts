import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleManageComponent } from './module-manage.component';

describe('ModuleManageComponent', () => {
  let component: ModuleManageComponent;
  let fixture: ComponentFixture<ModuleManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleManageComponent]
    });
    fixture = TestBed.createComponent(ModuleManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
