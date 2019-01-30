import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDialogUpdateComponent } from './open-dialog-update.component';

describe('OpenDialogUpdateComponent', () => {
  let component: OpenDialogUpdateComponent;
  let fixture: ComponentFixture<OpenDialogUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenDialogUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
