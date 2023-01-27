import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productItemesFromJson from '../../assets/productes.json'
import {Productes} from'../interfaces/productes'
import { ServiceProductService } from '../service/service-product.service';
@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.css']
})
export class ProductDetailesComponent {
  productDetails: Productes |any={
    createdAt:"",
    name:"",
    image:"",
    description:"",
    rate:0,
    count:0,
    price:"",
    reviews:[],
    id:""
  } 

  constructor(private myroute : ActivatedRoute ,private productDetailsFromService :ServiceProductService){}
  ngOnInit(){
   this.productDetailsFromService.getProductDetailes(this.myroute.snapshot.params['id']).subscribe((res:any)=>{
       this.productDetails=res 
      console.log(res);
      
     })
   
 

console.log( this.myroute.snapshot.params['id']);

}
}
