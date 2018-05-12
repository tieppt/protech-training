import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'ptt-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  @Input()
  post: Post;

  @Input()
  get show() {
    return this._show;
  }

  set show(value: any) {
    if (value === 'false' || value === false) {
      this._show = false;
    } else {
      this._show = true;
    }

    console.log(this._show);
  }
  private _show: boolean;

  @Output()
  delete = new EventEmitter<Post>();

  deleteItem(event) {
    console.log(event);
    this.delete.emit(this.post);
  }

  constructor() { }

  ngOnInit() {
  }

}
