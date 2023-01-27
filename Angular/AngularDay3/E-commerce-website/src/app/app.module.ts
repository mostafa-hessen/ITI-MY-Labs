import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardOFProductesComponent } from './card-ofproductes/card-ofproductes.component';
import { StockPipe } from './stock.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductesComponent } from './productes/productes.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyCartElementComponent } from './my-cart-element/my-cart-element.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    // CartComponent,
    NavBarComponent,
    CardOFProductesComponent,
    StockPipe,
    LoginComponent,
    RegisterComponent,
    ProductDetailesComponent,
    NotFoundPageComponent,
    ProductesComponent,
    MyCartComponent,
    MyCartElementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
