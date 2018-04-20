import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';

const EXPORTS = [
  TabsComponent,
  TabGroupComponent,
  TabPanelComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...EXPORTS
  ],
  exports: [
    ...EXPORTS
  ]
})
export class TabsModule { }
