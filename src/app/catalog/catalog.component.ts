import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: any;
  filter: string = '';

  constructor(private cartSvc: CartService, private prodcutSvc: ProductService) {}

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
          (product: any) => product.category === this.filter
        );
  }

  ngOnInit() {
    this.prodcutSvc.getProducts().subscribe(products => { //taking products recieved from observable data in server 
      this.products = products; // assigning it to the products property in catalog
    })
  }
}
