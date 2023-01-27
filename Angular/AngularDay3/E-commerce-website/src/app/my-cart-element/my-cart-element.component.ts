import { Component,Input } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-my-cart-element',
  templateUrl: './my-cart-element.component.html',
  styleUrls: ['./my-cart-element.component.css']
})
export class MyCartElementComponent {
  @Input()item: any
  numberOfitem:any=1

  constructor(private removeCart : CartService){}

  removeFromcart(id:number){
    // this.counterServices.changeConter(++this.counter)
    this.removeCart.RemoveFromCart(id)
   }
}
