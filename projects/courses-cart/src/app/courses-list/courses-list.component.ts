import { Component, OnInit, Input } from '@angular/core';
import { courses } from '../data';
import { Course, CartItem } from './../interfaces';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  coursesList: Course[] = courses;
  searchText: string = '';

  constructor() {}

  ngOnInit(): void {}
}
