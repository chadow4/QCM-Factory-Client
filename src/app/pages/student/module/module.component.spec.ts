import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module } from './module.component';

describe('ModulelComponent', () => {
  let component: Module;
  let fixture: ComponentFixture<Module>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Module]
    });
    fixture = TestBed.createComponent(Module);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
