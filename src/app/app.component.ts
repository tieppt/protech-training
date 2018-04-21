import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'ptt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  pdName = 'ca chep';
  isBlackTheme = false;
  list: number[];
  constructor(@Inject(DataService) public service) {
  }
  myClasses() {
    return {
      'black-theme': this.isBlackTheme,
      special: !this.isBlackTheme
    };
  }

  myStyles() {
    return {
      border: this.isBlackTheme ? '1px solid red' : '1px solid blue',
      fontSize: this.isBlackTheme ? '2em' : '1.5em',
    };
  }

  ngOnInit() {
    this.list = this.service.getAll();
  }
}
