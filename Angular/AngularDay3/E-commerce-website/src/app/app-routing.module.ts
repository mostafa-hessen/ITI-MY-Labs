import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { PrductComponent } from './PrductComponent/Prduct.component.spec';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { ProductesComponent } from './productes/productes.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component:ProductesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'mycart',
    component: MyCartComponent,
  },
  {
    path: 'details/:id',
    component: ProductDetailesComponent,
    canActivate:[AuthGuard] 
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
