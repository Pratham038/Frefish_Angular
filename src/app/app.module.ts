import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CartComponent } from './pages/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleproductComponent } from './pages/singleproduct/singleproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    AboutusComponent,
    ContactusComponent,
    CartComponent,
    ProductcardComponent,
    SingleproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
