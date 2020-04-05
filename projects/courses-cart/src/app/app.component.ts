import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'courses-cart';

  constructor(
    private cartService: CartService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.cartService.updateCart(
      JSON.parse(this.storageService.getItemFromLocalStorage('cart') || '')
    );
  }
}
