import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit{
  favouriteList: Product[] = []
  constructor(private productSvc:ProductService) {
  }
  ngOnInit() {
    this.favouriteList = this.productSvc.getFav()
  }

  getData3(product:Product){
    this.favouriteList = this.productSvc.getData3(product)
    console.log(this.favouriteList)

  }

}
