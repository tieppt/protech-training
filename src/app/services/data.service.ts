import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class DataService {
  length = 10;
  constructor(public userService: UserService) {}
  getAll() {
    return [
      1, 1, 2, 3, 5, 8, 11
    ];
  }
  getUser() {
    return this.userService.getUserInfo();
  }
}
