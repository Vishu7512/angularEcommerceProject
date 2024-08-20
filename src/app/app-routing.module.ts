import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './navbar/login/login.component';
import { SignupComponent } from './navbar/signup/signup.component';


const routes: Routes = [
  {
    path: "login",
  component:LoginComponent
  },
  {
    path: 'signup',
    component:SignupComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
