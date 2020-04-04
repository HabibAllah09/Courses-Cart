import { Injectable, EventEmitter } from '@angular/core';
import { Cart, CartItem } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = { items: [], sum: 0 };
  public cartUpdated: EventEmitter<any> = new EventEmitter();

  constructor() {}

  addToCart(item: CartItem): void {
    this.cart.sum += item.price;
    this.cart.items.push(item);
    this.cartUpdated.emit(this.cart);
  }

  getCart(): Cart {
    return this.cart;
  }

  getCartItems(): CartItem[] {
    return this.cart.items;
  }

  isItemExists(item: CartItem): boolean {
    return (
      this.cart.items.findIndex(anItem => item.title === anItem.title) >= 0
    );
  }

  removeFromCart(item: CartItem): void {
    if (!this.isItemExists(item)) {
      return;
    }
    this.cart.sum -= item.price;
    this.cart.items = this.cart.items.filter(
      anItem => item.title !== anItem.title
    );
    this.cartUpdated.emit(this.cart);
  }
}
