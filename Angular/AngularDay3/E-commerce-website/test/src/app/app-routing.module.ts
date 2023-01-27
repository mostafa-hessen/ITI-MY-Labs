import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { CardlockComponent } from './cardlock/cardlock.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  // {path:'',redirectTo:"home" ,pathMatch:'full'},
  { path: "", component: ProductListComponent }
  ,
  { path: "home", component: ProductListComponent },
  { path: "register", component: RegisterComponent  },
  { path: "login", component: LoginComponent },
  { path: "card/:id", component: CarddetailsComponent },
{path:"specialcard",component:CardlockComponent/*,canActivate:[AuthGuard]*/},
  { path: '**', component: NotfoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
