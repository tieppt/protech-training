import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'ptt-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  // encapsulation: ViewEncapsulation.Native
})
export class BlogComponent implements OnInit {

  postList: Post[] = [
    {
      id: '1',
      title: 'Post 1',
      body: 'Body Post 1'
    }, {
      id: '2',
      title: 'Post 2',
      body: 'Body Post 2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onDelete(post) {
    console.log(post);
    this.postList = this.postList.filter(p => p.id !== post.id);
  }
}
