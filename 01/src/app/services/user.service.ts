import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  username = 'Tiep Phan';
  getUserInfo() {
    return this.username;
  }
}
