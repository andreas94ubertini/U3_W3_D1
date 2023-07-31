import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-favouriterow',
  templateUrl: './favouriterow.component.html',
  styleUrls: ['./favouriterow.component.scss']
})
export class FavouriterowComponent {
  @Output() removed = new EventEmitter<Product>()
  @Input()brand!:string
  @Input()productName!:string
  @Input()price!:number
  @Input()product!:Product
  remove(product:Product){
    this.removed.emit(product)
  }

}
