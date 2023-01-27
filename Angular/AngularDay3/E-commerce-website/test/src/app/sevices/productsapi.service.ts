import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsapiService {

  constructor(private http:HttpClient) { }
  getproducts(){
    return this.http.get(`https://fakestoreapi.com/products`)
  }
  getsingleproduct(id:number){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }

}
