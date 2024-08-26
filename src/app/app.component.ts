import { Component , OnInit} from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-commerce-application';
  menuType :String='default';
  constructor(private router:Router) { }
  
  ngOnInit(): void {

    this.router.events.subscribe((val:any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.warn("in seller")
          this.menuType ='seller'
        }else{
          console.warn("out seller")
          this.menuType ='default'
        }
      }
    })
  }
}
