import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ptt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  pdName = 'ca chep';
  isBlackTheme = false;
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
}
