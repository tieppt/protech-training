import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ptt-pipe-lesson',
  templateUrl: './pipe-lesson.component.html',
  styleUrls: ['./pipe-lesson.component.scss']
})
export class PipeLessonComponent implements OnInit {
  birthday = new Date('1990-03-15');
  name = 'tiep pHan';
  collection: string[] = ['a', 'b', 'c', 'd'];
  temp = 35;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.birthday.setDate(25);
    // this.birthday = new Date(this.birthday);
    this.collection.unshift('5');
  }

}
