import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  numberOfItemsInCart: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.numberOfItemsInCart = this.cartService.getCartItems().length;
    this.cartService.cartUpdated.subscribe(() => {
      this.numberOfItemsInCart = this.cartService.getCartItems().length;
    });
  }
}
