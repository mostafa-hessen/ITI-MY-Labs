import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { StockPipe } from './pipes/stock.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { NavComponent } from './nav/nav.component';
import{ReactiveFormsModule} from '@angular/forms';
import { CardlockComponent } from './cardlock/cardlock.component'
import {HttpClientModule} from '@angular/common/http';
import { CartitemComponent } from './cartitem/cartitem.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    StockPipe,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    CarddetailsComponent,
    NavComponent,
    CardlockComponent,
    CartitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
