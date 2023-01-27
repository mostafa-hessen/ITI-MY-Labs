import { Component } from '@angular/core';
import { Productes } from '../interfaces/productes';
import { ServiceProductService } from '../service/service-product.service';
import productesFromJson from '../../assets/productes.json'
@Component({
  selector: 'app-productes',
  templateUrl: './productes.component.html',
  styleUrls: ['./productes.component.css']
})
export class ProductesComponent {
  constructor(private productFromService :ServiceProductService){}
  arrayOfProduct: Productes[]=productesFromJson
 //  arrayOfProduct:any

  ngOnInit()
  {
   this.productFromService.getProduct().subscribe((res:any)=>{
   this.arrayOfProduct=res 

   })
  }
}
