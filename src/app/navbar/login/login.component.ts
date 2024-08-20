import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   mainForm: FormGroup;
  isSubmitForm = false;

   constructor(private formbuilder: FormBuilder) { 
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

    // console.log(this.mainForm.controls['name'].status);
    // console.log(this.mainForm.controls['email'].value);
    // console.log(this.mainForm.controls['password'].value);
    // console.log(this.mainForm.controls['contact'].value);
    // console.log(this.mainForm.controls['gender'].value);
    // console.log(this.mainForm.controls['courses'].value);
  }


}