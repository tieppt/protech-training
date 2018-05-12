import { Component, OnInit } from '@angular/core';
import { Tapable } from '../tapable';

@Component({
  selector: 'ptt-tap-c',
  templateUrl: './tap-c.component.html',
  styleUrls: ['./tap-c.component.scss'],
  providers: [
    {
      provide: Tapable,
      useClass: TapCComponent
    }
  ]
})
export class TapCComponent
  implements OnInit, Tapable {

  constructor() { }

  ngOnInit() {
  }

  tap() {
    console.log('TapCComponent');
  }

}
