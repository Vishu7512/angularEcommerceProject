import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerDataService } from 'src/app/services/seller-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  mainForm: FormGroup;
  isSubmitForm = false;
  details = [];

  showLogin = false;

   constructor(private formbuilder: FormBuilder , private sellerDataServices:SellerDataService , private router:Router) { 
    this.mainForm = formbuilder.group({
       name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      gender: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  printData() {
   
    this.isSubmitForm = true;
     console.log(this.mainForm);
    console.log(this.mainForm.value);
    this.sellerDataServices.signUpData(this.mainForm.value).subscribe((res) => {
      if (res) {
       this.router.navigate(['home'])
      } 
    })
  }


  openLogin(){
    this.showLogin=true
  }

  openSignUp(){
    this.showLogin=false
  }

}
