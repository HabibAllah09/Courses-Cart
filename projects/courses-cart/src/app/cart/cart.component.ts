import { Component, OnInit } from '@angular/core';
import { Cart } from './../interfaces';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [], sum: 0 };
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartUpdated.subscribe(() => {
      this.cart = this.cartService.getCart();
    });
  }
}
