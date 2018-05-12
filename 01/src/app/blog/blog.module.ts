import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const ELM = [
  BlogComponent
];

@NgModule({
  declarations: [
    ...ELM,
    BlogPostComponent
  ],
  exports: [
    ...ELM,
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class BlogModule {}
