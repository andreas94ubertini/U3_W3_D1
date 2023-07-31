import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  allProducts!:Product[]
  shoppingCart: Product[] = []
  favouriteList: Product[] = []
constructor(private productSvc:ProductService) {
}
ngOnInit() {
this.productSvc.getAll().subscribe(data=>{
  this.allProducts = data['products']
  console.log(this.allProducts)
})
}

getData(product:Product){
  this.shoppingCart = this.productSvc.getData(product)
  console.log(this.shoppingCart, 'carrello')

}
getData2(product:Product){
  this.productSvc.getData2(product)
  this.favouriteList.push(product)
  console.log(this.favouriteList, 'nel component')
  }
  getData3(product:Product){
   this.favouriteList = this.productSvc.getData3(product)
    console.log(this.favouriteList)

  }
}
