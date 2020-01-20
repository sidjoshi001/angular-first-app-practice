import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrepaidComponent } from './prepaid/prepaid.component';
import {RechargeRoutingModule} from "./recharge-routing.module";



@NgModule({
  declarations: [PrepaidComponent],
  imports: [
    CommonModule,
    RechargeRoutingModule
  ]
})
export class RechargeModule { }
