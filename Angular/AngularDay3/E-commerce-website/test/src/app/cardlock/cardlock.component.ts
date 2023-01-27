import { Component } from '@angular/core';
import { Iproduct } from '../interface/iproduct';
import { CounterService } from '../sevices/counter.service';
import { ProductsapiService } from '../sevices/productsapi.service';
@Component({
  selector: 'app-cardlock',
  templateUrl: './cardlock.component.html',
  styleUrls: ['./cardlock.component.css']
})
export class CardlockComponent {

  product:Array<Iproduct> =[];
  
constructor(private CounterService:CounterService ){}
ngOnInit() :void{
  this.CounterService.producarrval.subscribe((arry)=>{this.product=arry})

  }


}



