import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanValuationFormComponent } from './loan-valuation-form.component';

describe('LoanValuationFormComponent', () => {
  let component: LoanValuationFormComponent;
  let fixture: ComponentFixture<LoanValuationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanValuationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanValuationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
