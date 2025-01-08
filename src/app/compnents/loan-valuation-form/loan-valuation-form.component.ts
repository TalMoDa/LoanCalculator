import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FinanceService} from '../../../api/loanCalculatorApi';
import {Client, clientsListFromDbHardCoded} from '../../models/client';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-loan-valuation-form',
  standalone: false,
  templateUrl: './loan-valuation-form.component.html',
  styleUrl: './loan-valuation-form.component.scss'
})
export class LoanValuationFormComponent implements OnInit, OnDestroy {
  loanForm!: FormGroup;
  clientsList: Client[] = clientsListFromDbHardCoded;
  loanValuation!: number;
  destroy$ = new Subject<void>();


  constructor(private fb: FormBuilder, private financeService: FinanceService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      userId: ['', Validators.required],
      loanAmount: [0, [Validators.required, Validators.min(1)]],
      loanPeriod: [0, [Validators.required, Validators.min(12)]],
    });
  }

  submitLoanForm() {
    if (this.loanForm.valid) {
      this.financeService.valuateLoan
      (
          this.loanForm.value.loanAmount,
          this.loanForm.value.loanPeriod,
          this.loanForm.value.userId
      ).pipe(takeUntil(this.destroy$))
        .subscribe((valuation) => this.loanValuation = valuation);
    }
  }
}
