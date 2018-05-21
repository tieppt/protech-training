import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  postByUser: any[] = [];
  showPost = false;
  userId: number;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.fetchPostByUserId(this.userId);
  }

  fetchPostByUserId(userId) {
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
