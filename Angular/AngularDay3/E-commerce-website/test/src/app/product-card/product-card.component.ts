import { Component, Input } from '@angular/core';
import { count } from 'rxjs';
import { Iproduct } from '../interface/iproduct';
import { CounterService } from '../sevices/counter.service';
import { ProductsapiService } from '../sevices/productsapi.service';

import prodct from  './../../assets/data/product.json'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() prodctcard :any =[];
  produuctpush :any={};


  counter :number=1;
constructor(private CounterService:CounterService){}
ngOnInit() :void{
this.prodctcard.quntity=0;
  this.CounterService.producarrval.subscribe((arry:any)=>{this.produuctpush=arry});
}
count(product:any)
{ 
++product.quntity;
if(product.quntity<=1)
{this.CounterService.changeproductarrycart(product)}

}


}
