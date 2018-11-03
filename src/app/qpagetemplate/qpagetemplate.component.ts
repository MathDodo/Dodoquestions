import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {DataService} from '../data.service'

@Component({
  selector: 'app-qpagetemplate',
  templateUrl: './qpagetemplate.component.html',
  styleUrls: ['./qpagetemplate.component.css']
})
export class QpagetemplateComponent implements OnInit {

  data: string = "";
  question : any;

  constructor(private route: Router, private service: DataService) 
  {

  }

  ngOnInit() {
    var array = this.service.GetData();
    let check = false;

    for(var item of array){      
      if("/questions/" + item.path == this.route.url.toString()){
        check = true;
        this.question = item;
      }
    }

    if(!check){
      this.route.navigateByUrl("pageNotFound");
    }
  }

  GetAnswers()
  {
    return this.service.GetAnswers(this.question.path);
  }

  PostAnswer()
  {
    if(this.data !=undefined && this.data != ""){
    this.service.AddAnswer(this.question.path, this.data);
    this.data = "";}
  }

  Vote(index : number){
    this.service.AnswerVote(this.question.path, index);
  }

  Bookmark(){
    this.service.Bookmark(this.question.path);
  }
}
