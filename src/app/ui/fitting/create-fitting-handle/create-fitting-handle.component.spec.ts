import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFittingHandleComponent } from './create-fitting-handle.component';

describe('CreateFittingHandleComponent', () => {
  let component: CreateFittingHandleComponent;
  let fixture: ComponentFixture<CreateFittingHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFittingHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFittingHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
