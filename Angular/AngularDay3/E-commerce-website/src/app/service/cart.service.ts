import { Injectable } from '@angular/core';
import { BehaviorSubject, elementAt } from "rxjs"
import { ServiceProductService } from './service-product.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // constructor() { }
  constructor(private productFromService: ServiceProductService) { }
  // firstCounter
  ngOnInit() {
  }



  private myCartProductes = new BehaviorSubject<any[]>([]);

  newmyCartProduct = this.myCartProductes.asObservable()
  hi: any
  res: any
  AddToCart(id: number) {
    this.productFromService.getProduct().subscribe((res: any) => {
      this.res = res.find((ele: any) => {
        return ele.id == id
      })
      
      this.myCartProductes.next([...this.myCartProductes.getValue(), this.res])
    })
  }


  RemoveFromCart(id: number) {
    this.myCartProductes.next(this.myCartProductes.getValue().filter((ele: any) => {
      return ele.id != id
    }))

     this.myCartCounter.next(this.myCartProductes.getValue().length)
  }


  private myCartCounter = new BehaviorSubject(0);

  newmyCartCounter = this.myCartCounter.asObservable()

  changeConter(newCount: number) {
    console.log( this.myCartCounter.next(this.myCartProductes.getValue().length+1));
    return this.myCartCounter.next(this.myCartProductes.getValue().length+1)
  }

}
