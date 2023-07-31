import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Output() addedToCart = new EventEmitter<Product>()
  @Output() addedToFav = new EventEmitter<Product>()
  @Input()brand!:string
  @Input()productName!:string
  @Input()price!:number
  @Input()product!:Product
  addToCart(product:Product){
    this.addedToCart.emit(product)
  }
  addToFav(product:Product){
    this.addedToFav.emit(product)
  }


}
