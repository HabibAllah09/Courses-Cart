import { Component, OnInit } from '@angular/core';
import { Cart } from './../interfaces';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cartService.cartUpdated.subscribe(() => {
      this.cart = this.cartService.getCart();
      console.log(this.cart);
    });
  }
}
