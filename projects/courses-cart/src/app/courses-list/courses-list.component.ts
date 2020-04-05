import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { courses } from './../../assets/data';
import { Course } from './../interfaces';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  coursesList: Course[] = courses;
  sortProperties: string[] = ['level', 'price'];
  filterSortForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.filterSortForm = this.fb.group({
      sortBy: new FormControl(''),
      searchText: new FormControl('')
    });
  }

  ngOnInit(): void {}
}
