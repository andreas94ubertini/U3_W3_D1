import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { NavComponent } from './component/nav/nav.component';
import { ProductComponent } from './component/product/product.component';
import {HttpClientModule} from "@angular/common/http";
import { FavouriterowComponent } from './component/favouriterow/favouriterow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavouriteComponent,
    NavComponent,
    ProductComponent,
    FavouriterowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
