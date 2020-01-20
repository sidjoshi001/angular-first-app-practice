import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {ShoppingModule} from "./shopping/shopping.module";
import { AboutComponent } from './about/about.component';
import {RechargeModule} from "./recharge/recharge.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingModule,
    RechargeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
