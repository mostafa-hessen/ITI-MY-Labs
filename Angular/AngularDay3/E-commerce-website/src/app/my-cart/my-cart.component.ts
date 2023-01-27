import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent {
  counter:number=0
  productes:any
  constructor(private counterServices : CartService){}

  ngOnInit(){

    this.counterServices.newmyCartCounter.subscribe((res:any)=>{
      console.log("res",res); 
     this.counter=res
    })

     this.counterServices.newmyCartProduct.subscribe((res:any)=>{
      this.productes=res 
      console.log("=>",this.productes);
      
    })
  }



}
