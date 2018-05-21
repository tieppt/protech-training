import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppNavComponent } from './app-nav/app-nav.component';
import { AppComponent } from './app.component';
import { TdFormComponent } from './td-form/td-form.component';
import { RtFormComponent } from './rt-form/rt-form.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
}, {
  path: 'td-form',
  component: TdFormComponent
}, {
  path: 'rt-form',
  component: RtFormComponent
}, {
  path: 'users',
  children: [
    {
      path: '',
      component: UsersComponent,
      pathMatch: 'full'
    }, {
      path: ':id',
      component: UserDetailComponent
    }
  ]
}, {
  path: 'products',
  loadChildren: './products/products.module#ProductsModule'
}, {
  path: '**',
  redirectTo: '/'
}];

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    TdFormComponent,
    RtFormComponent,
    UsersComponent,
    HomeComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
