import {Injectable} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Product} from "./model/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  shoppingCart: Product[] = []
  favouriteList: Product[] = []
  private baseUrl:string = "https://dummyjson.com/products"
  risposta!: Observable<any>

  constructor(private http:HttpClient) {
  }
  getAll():Observable<any>{
    return this.risposta = this.http.get<any>(this.baseUrl)
  }
  getData(product:Product):Product[]{
    this.shoppingCart.push(product)
    return this.shoppingCart
  }
  getData2(product:Product){

    this.favouriteList.push(product)
    console.log(this.favouriteList, 'service')
  }
  getData3(product:Product):Product[]{
    this.favouriteList.splice(0, 1)
    return this.favouriteList
  }


}
