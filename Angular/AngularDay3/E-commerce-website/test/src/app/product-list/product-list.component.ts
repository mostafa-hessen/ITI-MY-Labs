import { Component } from '@angular/core';
import { Iproduct } from '../interface/iproduct';
import prodct from  './../../assets/data/product.json'
import { Router } from '@angular/router';
import{ ProductsapiService} from './../sevices/productsapi.service'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:Array<Iproduct> =[];
  constructor(private router:Router ,private Productsapi:ProductsapiService)
  {

  }
  ngOnInit(): void{
this.Productsapi.getproducts().subscribe((res: any)=>this.products =res)

  }

}
