import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDialogUpdateModuleComponent } from './open-dialog-update-module.component';

describe('OpenDialogUpdateModuleComponent', () => {
  let component: OpenDialogUpdateModuleComponent;
  let fixture: ComponentFixture<OpenDialogUpdateModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenDialogUpdateModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDialogUpdateModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
