import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  Thenews:any[]=[];

  constructor(
    private http:HttpClient,
    private news:NewsService) {
    this.news.getGeneralNews().subscribe((data:any) => {
      console.log(data);
      
      
    });
    }

    getNews(category?:string){
      return this.news.getNews(category).subscribe((data:any)=>{
        console.log(data);
        this.Thenews=data;
      })
    }

    getNewsBytitle(title){
      this.news.getNewsByTitle(title).subscribe(
        (response:any)=>{
          this.news=response;
          console.log(this.news);
        }
      )
  
    }

  ngOnInit() {
  }

}
