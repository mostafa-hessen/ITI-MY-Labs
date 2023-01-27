import { Component ,Input} from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-card-ofproductes',
  templateUrl: './card-ofproductes.component.html',
  styleUrls: ['./card-ofproductes.component.css']
})
export class CardOFProductesComponent {
@Input()item: any
counter:number=0
constructor(private  counterServices : CartService){}

ngOnInit(){
  this.counterServices.newmyCartCounter.subscribe((res:any)=>{this.counter=res})
}


addtocart(id:number){
 this.counterServices.changeConter(++this.counter)
 this.counterServices.AddToCart(id)
}
}
