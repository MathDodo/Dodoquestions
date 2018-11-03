import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css']
})
export class AskquestionComponent implements OnInit {

  data : any;
  constructor( private router : Router, private http : HttpClient, private service:DataService) { }

  ngOnInit() {
  }

  PostQuestion(){

    if(this.data != undefined && this.data != "")
    {
    this.service.AddData(this.data);
    this.router.navigateByUrl("");
  }
  }
}
