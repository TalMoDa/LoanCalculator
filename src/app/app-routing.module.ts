import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoanValuationFormComponent} from './compnents/loan-valuation-form/loan-valuation-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'loan-valuation', pathMatch: 'full' },
  { path: 'loan-valuation', component: LoanValuationFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
