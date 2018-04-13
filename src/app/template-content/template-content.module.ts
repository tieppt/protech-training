import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { TemplateContentComponent } from './template-content.component';
import { ContentBlockComponent } from './content-block/content-block.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [TemplateContentComponent, ContentBlockComponent],
  exports: [TemplateContentComponent, ContentBlockComponent]
})
export class TemplateContentModule { }
