import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsListComponent,
        pathMatch: 'full'
      }, {
        path: ':id',
        component: ProductsDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsComponent,
    ProductsDetailComponent,
    ProductsListComponent
  ]
})
export class ProductsModule { }
