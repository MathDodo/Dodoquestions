import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from "@angular/router";
import {DataService} from "../data.service";
import { Url } from 'url';
import { QpagetemplateComponent } from '../qpagetemplate/qpagetemplate.component';
import { FooComponent } from '../foo/foo.component';
import { AskquestionComponent } from '../askquestion/askquestion.component';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  test = ["Hello", "Who knows"];
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private service : DataService,) { 
    }

  ngOnInit() {
  }

AskQuestion(){
  this.router.navigateByUrl("/ask");
}

  GetQuestions(){
    return this.service.GetData();
  }

  LookUpQuestion(index: number){
    this.router.navigateByUrl("/questions/" + this.service.GetData()[index].path);
  }

  LookUpBookmarkedQuestion(index: number){
    this.router.navigateByUrl("/questions/" + this.service.GetBookmarkedData()[index].path);
  }

  GetBookmarkedQuestions(){
    return this.service.GetBookmarkedData();
  }
}
