import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router'
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-commerce-application';
  menuType: String = 'default';
  trendyProducts = []
  constructor(private router: Router, private productsService: ProductsService) { }
  
  ngOnInit(): void {

    this.productsService.getData().subscribe((data: any) => {
      this.trendyProducts = data
      console.log(data);

      //   this.router.events.subscribe((val:any) => {
      //     if (val.url) {
      //       if (localStorage.getItem('seller') && val.url.includes('home')) {
      //         console.warn("in seller")
      //         this.menuType ='seller'
      //       }else{
      //         console.warn("out seller")
      //         this.menuType ='default'
      //       }
      //     }
      //   })
      // }
    
    })
}
}

  
