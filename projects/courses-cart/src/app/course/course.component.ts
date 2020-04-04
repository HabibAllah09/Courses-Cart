import { Component, Input, OnInit } from '@angular/core';
import { Course } from './../interfaces';
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

  addToCart(course: Course) {
    this.cartService.addToCart(course);
  }

  removeFromCart(course: Course) {
    this.cartService.removeFromCart(course);
  }
}
