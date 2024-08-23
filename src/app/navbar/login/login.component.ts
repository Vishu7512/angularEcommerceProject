import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerDataService } from 'src/app/services/seller-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   mainForm: FormGroup;
  isSubmitForm = false;

   constructor(private formbuilder: FormBuilder , private sellerDataServices:SellerDataService,private router:Router) { 
    this.mainForm = formbuilder.group({
       name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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
    this.sellerDataServices.loginData(this.mainForm.value).subscribe((res:any) => {
        if(Object.keys(res).length==1){
              console.log("Successful login");
              
         }else{
          console.log("login Fail");
         }

        //console.log(Object.keys(data).length);
        
    })
    // console.log(this.loginForm.value);
    this.mainForm.reset()
  
  }
}