import { Component, OnInit, Input, ViewEncapsulation, HostBinding } from '@angular/core';

let idx = 1;

@Component({
  selector: 'ptt-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabPanelComponent implements OnInit {
  readonly id = idx++;
  private _active = false;
  @Input() tabTitle: string;

  @HostBinding('attr.active')
  @Input()
  get active() {
    return this._active;
  }
  set active(value: any) {
    if (value == null || value === false || value === 'false') {
      this._active = false;
    } else {
      this._active = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
