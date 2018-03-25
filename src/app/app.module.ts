import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
