import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products");
  }

  getProductDetailes(id:any){
    return this.http.get(`https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products/${id}`);

  }
}
