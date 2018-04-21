import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'ptt-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  providers: [
    {
      provide: DataService,
      useClass: DataService
    }
  ],
})
export class TabsComponent implements OnInit {
  list: number[];
  constructor(
    public service: DataService) { }

  ngOnInit() {
    const service = this.service;
    this.list = service.getAll();
  }

}
