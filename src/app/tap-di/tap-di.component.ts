import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { TapAComponent } from './tap-a/tap-a.component';
import { Tapable } from './tapable';

@Component({
  selector: 'ptt-tap-di',
  templateUrl: './tap-di.component.html',
  styleUrls: ['./tap-di.component.scss']
})
export class TapDiComponent implements OnInit {

  @ViewChildren(Tapable) taps: QueryList<Tapable>;
  constructor() { }

  ngOnInit() {
  }

  callTap() {
    console.log('ahihi!!!');
    this.taps.forEach(t => t.tap());
  }

}
