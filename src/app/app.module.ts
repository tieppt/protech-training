import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ProductModule } from './product/product.module';
import { BlogModule } from './blog/blog.module';
import { PipeLessonComponent } from './components/pipe-lesson/pipe-lesson.component';
import { TempConverterPipe } from './components/pipe-lesson/temp-converter.pipe';
import { TemplateContentModule } from './template-content/template-content.module';
import { TabsModule } from './tabs/tabs.module';
import { DataService } from './services/data.service';
import { UserService } from './services/user.service';
import { TapDiModule } from './tap-di/tap-di.module';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    PipeLessonComponent,
    TempConverterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ProductModule,
    BlogModule,
    TemplateContentModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    TabsModule,
    TapDiModule
  ],
  providers: [
    // DataService,
    // UserService
    {
      provide: DataService,
      useClass: DataService,
      deps: [
        UserService
      ]
    },
    {
      provide: UserService,
      useClass: UserService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
