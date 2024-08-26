import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  details = []
   selectedUser: any = null;
  ngOnInit(): void {
    this.printData()
  }


  printData() {
    console.log("I am in user Component");
    this.productsService.getData().subscribe((data: any) => {
      this.details = data
      console.log(data);
      
    })
  }

  deleteUserById(id: any) {
    this.productsService.deleteUserById(id).subscribe((data: any) => {
      console.log(data);
      this.printData()
       
    })
    console.log(id)
  }

  editUser(user: any) {
    this.selectedUser = { ...user }; // Create a copy of the user for editing
  }

  updateUser() {
    if (this.selectedUser) {
      this.productsService.updateUser(this.selectedUser).subscribe(() => {
        this.printData();
        this.selectedUser = null; // Clear selection after update
      });
    }
  }

  cancelUpdate() {
    this.selectedUser = null; // Clear selection if the user cancels
  }

}