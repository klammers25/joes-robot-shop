import { Component } from '@angular/core';
import { CatalogComponent } from "./catalog/catalog.component";
import { CartComponent } from "../../_course-resources/cart/cart.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CatalogComponent, CartComponent]
})
export class AppComponent {
}
