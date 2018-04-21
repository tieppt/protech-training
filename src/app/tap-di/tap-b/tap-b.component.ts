import { Component, OnInit } from '@angular/core';
import { Tapable } from '../tapable';

@Component({
  selector: 'ptt-tap-b',
  templateUrl: './tap-b.component.html',
  styleUrls: ['./tap-b.component.scss'],
  providers: [
    {
      provide: Tapable,
      useClass: TapBComponent
    }
  ]
})
export class TapBComponent
  implements OnInit, Tapable {

  constructor() { }

  ngOnInit() {
  }

  tap() {
    console.log('TapBComponent');
  }

}
