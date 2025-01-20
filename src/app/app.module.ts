import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
<<<<<<< HEAD
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
=======
>>>>>>> a79e18153e8ef233b92b287d44e854c2f10c8658

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
    CatalogComponent,
    SiteHeaderComponent,
    ProductDetailsComponent
=======
    CatalogComponent
>>>>>>> a79e18153e8ef233b92b287d44e854c2f10c8658
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
