import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { QpagetemplateComponent } from './qpagetemplate/qpagetemplate.component';
import { AskquestionComponent } from './askquestion/askquestion.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent,
    QpagetemplateComponent,
    AskquestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
