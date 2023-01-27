import { Component, Input } from '@angular/core';
import { CounterService } from '../sevices/counter.service';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent {
@Input() prodctcart:any={};

  
  constructor(private CounterService:CounterService){}
  ngOnInit() :void{

  }
  increasecount()
{ 
this.prodctcart.quntity ++;
}
decreasecount()
{
this.prodctcart.quntity --;
}
}
