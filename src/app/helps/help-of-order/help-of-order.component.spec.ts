import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpOfOrderComponent } from './help-of-order.component';
import {describe, expect} from "@angular/core/testing/src/testing_internal";

describe('HelpOfOrderComponent', () => {
  let component: HelpOfOrderComponent;
  let fixture: ComponentFixture<HelpOfOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpOfOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpOfOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
