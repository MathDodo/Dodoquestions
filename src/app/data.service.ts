import { Injectable } from '@angular/core';
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";

interface Question
{
  path: string,
  question: string,
  answers: Answer[],
  bookmarked: boolean
}

interface Answer{
  answer: string,
  vote: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url_prefix : string = environment.express_url;

  dataId: number = 0;
  data : Question[] = [];

  constructor(private http : HttpClient) {
    timer(0, 1000)
      .pipe(switchMap(
        _ => this.http.get<Question[]>(this.url_prefix+'/api/my_data'))
      ).subscribe(data => {
        this.data = data;
        console.log(data);
          })    
  }

  AddData(data: string){   
    this.data.push({path: data.replace(/\s/g, "q").replace(/[^a-zA-Z ]/g, "q") + this.dataId++, question: data, answers: [], bookmarked: false}); 
    this.http.post<Question[]>(this.url_prefix+'/api/my_data', this.data).subscribe();
  }

  AddAnswer(path : string, answering: string){
    for(var item of this.data){      
        if(path == item.path){
          item.answers.push({answer: answering, vote: 0});
        }
      }

      this.http.post<Question[]>(this.url_prefix+'/api/my_data', this.data).subscribe();
    }

    GetAnswers(path : string){
      for(var item of this.data){      
        if(path == item.path){
          return item.answers;
        }
      }
    }

AnswerVote(path: string, index:number){
  for(var item of this.data){      
    if(path == item.path){
      item.answers[index].vote++;
    }

    this.http.post<Question[]>(this.url_prefix+'/api/my_data', this.data).subscribe();
  }
}

Bookmark(path: string){
  for(var item of this.data){      
    if(path == item.path){
      item.bookmarked = true;
    }}

    this.http.post<Question[]>(this.url_prefix+'/api/my_data', this.data).subscribe();
}

GetBookmarkedData(){
  var array = [];

  for(var item of this.data){      
    if(item.bookmarked){
      array.push(item);
    }}

    return array;
}
  GetData(){    
    return this.data;
  }
}
