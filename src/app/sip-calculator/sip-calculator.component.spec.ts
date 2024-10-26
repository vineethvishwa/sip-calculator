import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipCalculatorComponent } from './sip-calculator.component';

describe('SipCalculatorComponent', () => {
  let component: SipCalculatorComponent;
  let fixture: ComponentFixture<SipCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SipCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
