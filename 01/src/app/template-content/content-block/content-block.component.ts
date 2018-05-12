import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ptt-content-block',
  exportAs: 'pttCtBl',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.scss']
})
export class ContentBlockComponent implements OnInit {
  @Input()
  isShow = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleBody() {
    this.isShow = !this.isShow;
  }

}
