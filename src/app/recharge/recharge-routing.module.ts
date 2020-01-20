import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrepaidComponent} from "./prepaid/prepaid.component";


const routes: Routes = [
  {path: 'recharge/prepaid', component: PrepaidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RechargeRoutingModule { }
