import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './navbar/login/login.component';
import { SignupComponent } from './navbar/signup/signup.component';
import { HomeComponent } from './navbar/home/home.component';
import { SellerComponent } from './navbar/seller/seller.component';


const routes: Routes = [
   {
    path: '',
  component:HomeComponent
  },
  {
    path: "login",
  component:LoginComponent
  },
  {
    path: 'signup',
    component:SignupComponent
  },
  {
    path: "home",
  component:HomeComponent
  },
  {
    path: "seller",
  component:SellerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
