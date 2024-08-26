// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { SellerDataService } from 'src/app/services/seller-data.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-seller',
//   templateUrl: './seller.component.html',
//   styleUrls: ['./seller.component.css']
// })
// export class SellerComponent implements OnInit {

//   mainForm: FormGroup;
//   isSubmitForm = false;
//   details = [];

//   showLogin = false;

//    constructor(private formbuilder: FormBuilder , private sellerDataServices:SellerDataService , private router:Router) { 
//     this.mainForm = formbuilder.group({
//        name: ['', [Validators.required, Validators.minLength(3)]],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmPassword: ['', [Validators.required]],
//       contact: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
//       gender: ['', Validators.required]
//     })
//   }

//   ngOnInit(): void {
//   }

//   printData() {
   
//     this.isSubmitForm = true;
//      console.log(this.mainForm);
//     console.log(this.mainForm.value);
//     this.sellerDataServices.signUpData(this.mainForm.value).subscribe((res) => {
//       if (res) {
//        this.router.navigate(['sellerHome'])
//       } 
//     })
//   }


//   openLogin(){
//     this.showLogin=true
//   }

//   openSignUp(){
//     this.showLogin=false
//   }

// }



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
  showLogin = false;
  emailExists = false;
  loginFailed = false;

  constructor(private formbuilder: FormBuilder, private sellerDataServices: SellerDataService, private router: Router) { 
    this.mainForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      gender: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  printData() {
    this.isSubmitForm = true;

    if (!this.showLogin) {
      // Sign-up logic
      this.sellerDataServices.checkEmailExists(this.mainForm.controls['email'].value).subscribe((existingUsers) => {
        if (existingUsers.length > 0) {
          this.emailExists = true;
        } else {
          this.emailExists = false;
          this.sellerDataServices.signUpData(this.mainForm.value).subscribe((res) => {
            if (res) {
              // Store the data in localStorage
              localStorage.setItem('sellerData', JSON.stringify(res));
              this.router.navigate(['sellerHome']);
            }
          });
        }
      });
    } else {
      // Login logic
      this.sellerDataServices.loginData(
        this.mainForm.controls['email'].value, 
        this.mainForm.controls['password'].value
      ).subscribe((users) => {
        if (users.length > 0) {
          this.loginFailed = false;
          // Store the logged-in user's data in localStorage
          localStorage.setItem('sellerData', JSON.stringify(users[0]));
          this.router.navigate(['sellerHome']);
        } else {
          this.loginFailed = true;
        }
      });
    }
  }

  openLogin() {
    this.showLogin = true;
    this.isSubmitForm = false;
    this.mainForm.reset();
  }

  openSignUp() {
    this.showLogin = false;
    this.isSubmitForm = false;
    this.mainForm.reset();
  }
}
