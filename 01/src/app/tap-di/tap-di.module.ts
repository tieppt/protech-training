import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TapDiComponent } from './tap-di.component';
import { TapAComponent } from './tap-a/tap-a.component';
import { TapBComponent } from './tap-b/tap-b.component';
import { TapCComponent } from './tap-c/tap-c.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TapDiComponent,
    TapAComponent,
    TapBComponent,
    TapCComponent
  ],
  exports: [
    TapDiComponent
  ]
})
export class TapDiModule { }
