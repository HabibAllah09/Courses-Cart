import { Component, Input, OnInit } from '@angular/core';
import { Course, CartItem } from './../interfaces';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(course: Course): void {
    this.cartService.addToCart(course);
  }

  isButtonDisabled(buttonType: string): boolean {
    if (buttonType === 'add') {
      return this.cartService.isItemExists(this.course);
    }
    return !this.cartService.isItemExists(this.course);
  }

  removeFromCart(course: Course): void {
    this.cartService.removeFromCart(course);
  }
}
