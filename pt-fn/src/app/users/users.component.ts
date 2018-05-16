import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList: any[] = [];
  loading = false;

  postByUser: any[] = [];
  showPost = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        delay(1000)
      )
      .subscribe((next: any[]) => {
        this.userList = next;
      }, error => {
        console.log(error);
        this.loading = false;
      }, () => {
        this.loading = false;
      });
  }

  fetchPostByUserId(userId) {
    console.log(userId);
    this.http.get('https://jsonplaceholder.typicode.com/posts', {
      // params: new HttpParams().set('userId', userId)
      params: {
        userId: userId
      }
    })
    .subscribe((data: any[]) => {
      this.postByUser = data;
      this.showPost = true;
    }, err => {
      this.postByUser = [];
      this.showPost = false;
    });
  }

}
