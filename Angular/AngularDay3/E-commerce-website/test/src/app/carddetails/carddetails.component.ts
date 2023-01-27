import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{Iproduct} from './../../app/interface/iproduct'
import prodct from  './../../assets/data/product.json'
import{ ProductsapiService} from './../sevices/productsapi.service'


@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})
export class CarddetailsComponent {
  details:Iproduct|any ={
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: [],
    rate: 0,
    count:0,
  }
constructor(private activetedroute:ActivatedRoute ,private Productsapi:ProductsapiService){

}
ngOnInit():void{

  this.Productsapi.getsingleproduct(this.activetedroute.snapshot.params['id']).subscribe((res:any)=>{this.details=res})

// this.details= prodct.find((prodcut)=>prodcut.id ==this.activetedroute.snapshot.params['id'])
// console.log(this.details.reviews)
}
}
