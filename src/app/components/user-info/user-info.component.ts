import { Component } from '@angular/core';

@Component({
  selector: 'ptt-user-info',
  templateUrl: './user-info.component.html'
})
export class UserInfoComponent {
  name = 'Tiep';
  dob = '20-2-1990';
  showInput = false;
  onClick() {
    this.showInput = !this.showInput;
  }
}
