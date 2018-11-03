import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { FooComponent } from "./foo/foo.component";
import { BarComponent } from "./bar/bar.component";
import { AskquestionComponent } from './askquestion/askquestion.component';
import { QpagetemplateComponent } from './qpagetemplate/qpagetemplate.component';

const appRoutes : Routes = [
  {path: '', component : BarComponent},
  {path: 'ask', component: AskquestionComponent},
  {path: 'questions/:q', component: QpagetemplateComponent},
  {path: "**", component : FooComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
