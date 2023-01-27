import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  counter:any
  constructor(private counterServices : CartService){}



  ngOnInit(){
    this.counterServices.newmyCartCounter.subscribe((res:any)=>{
     this.counter= res
    })}
      
}
