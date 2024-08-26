import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  mainForm: FormGroup;
  isSubmitForm = false;
  details = [];

   constructor(private formbuilder: FormBuilder , private userService:UserService , private router:Router) {
    this.mainForm = formbuilder.group({
       name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      contact: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      gender: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  printData() {
    this.isSubmitForm = true;

const existUser = {
         email: this.mainForm.value['email'],
        password: this.mainForm.value['password']
       }
       const newUser = this.mainForm.value;
      this.userService.loginData(existUser).subscribe((res)=>{

      if(Object.keys(res).length==1){
         alert("User already exists...Please try different email");
        // console.log(Object.keys(res).length)
             
        }else{
          this.userService.signUpData(newUser).subscribe((res) =>{
            console.log(res);
          })
        this.router.navigate(['home'])

        }

      })
    
    this.mainForm.reset()
    }

}


