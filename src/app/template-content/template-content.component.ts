import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  AfterViewInit,
  ElementRef,
  ContentChild,
  AfterContentInit
} from '@angular/core';
import { ContentBlockComponent } from './content-block/content-block.component';

@Component({
  selector: 'ptt-template-content',
  templateUrl: './template-content.component.html',
  styleUrls: ['./template-content.component.scss']
})
export class TemplateContentComponent
  implements OnInit, AfterViewInit, AfterContentInit {
  inputValue = '';

  // @ViewChildren(ContentBlockComponent)
  @ViewChild('ctb', { read: ContentBlockComponent })
  ctnBlock: ContentBlockComponent;

  @ContentChild(ContentBlockComponent)
  ctcBlock: ContentBlockComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('Content', this.ctcBlock);
    setTimeout(() => {
      this.ctcBlock.toggleBody();
    }, 2000);
  }

  ngAfterViewInit() {
    console.log(this.ctnBlock);
    setTimeout(() => {
      this.ctnBlock.toggleBody();
    }, 5000);
  }

}
