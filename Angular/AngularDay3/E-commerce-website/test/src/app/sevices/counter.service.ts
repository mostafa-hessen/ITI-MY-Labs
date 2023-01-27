import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CounterService {
private clothcount=new BehaviorSubject(0);
private produuctpush=new BehaviorSubject([]);
countval=this.clothcount.asObservable();
producarrval=this.produuctpush.asObservable();
prodctitm:any;
  constructor() {
   this.produuctpush.subscribe((ele)=> this.prodctitm=ele)
   }
  changecounter(count:number){
     this.clothcount.next(count);
  }
  changeproductarrycart(obj:{}){
this.prodctitm.push(obj);

    this.produuctpush.next(this.prodctitm)
  }
}
