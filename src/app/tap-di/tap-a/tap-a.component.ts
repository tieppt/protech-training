import { Component, OnInit } from '@angular/core';
import { Tapable } from '../tapable';

@Component({
  selector: 'ptt-tap-a',
  templateUrl: './tap-a.component.html',
  styleUrls: ['./tap-a.component.scss'],
  providers: [
    {
      provide: Tapable,
      useClass: TapAComponent
    }
  ]
})
export class TapAComponent
  implements OnInit, Tapable {

  constructor() { }

  ngOnInit() {
  }

  tap() {
    console.log('TapAComponent');
  }

}
