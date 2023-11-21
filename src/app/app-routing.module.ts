import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CartComponent } from './pages/cart/cart.component';
import { SingleproductComponent } from './pages/singleproduct/singleproduct.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'cart', component: CartComponent },
  { path: ':id', component: SingleproductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
