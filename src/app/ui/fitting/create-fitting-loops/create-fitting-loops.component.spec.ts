import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFittingLoopsComponent } from './create-fitting-loops.component';

describe('CreateFittingLoopsComponent', () => {
  let component: CreateFittingLoopsComponent;
  let fixture: ComponentFixture<CreateFittingLoopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFittingLoopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFittingLoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
