import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpOfModuleComponent } from './help-of-module.component';

describe('HelpOfModuleComponent', () => {
  let component: HelpOfModuleComponent;
  let fixture: ComponentFixture<HelpOfModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpOfModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpOfModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
