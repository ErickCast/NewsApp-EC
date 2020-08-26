import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { 
    console.log("Servicio news corriendo!!!");
  }

  getQuery(query:string){
    const url=`https://newsapi.org/v2/${query}`;

    const headers = new HttpHeaders({
      'Authorization': "Bearer 10e04ffc0fd04b3291b23ba2a1a1a646"
    })

    return this.http.get(url);
  }


  getGeneralNews(){
    return this.getQuery('top-headlines?country=mx&apiKey=10e04ffc0fd04b3291b23ba2a1a1a646')
      .pipe(map(data => data['articles']));
  }
  getNews(category?:string){
    return this.getQuery(`top-headlines?country=mx${category}&apiKey=10e04ffc0fd04b3291b23ba2a1a1a646`)
      .pipe(map(data=>data["articles"]));
  }
  getNewsByTitle(title){
    return this.getQuery(`everything?q=${title}&from=2020-05-25&sortBy=publishedAt&apiKey=10e04ffc0fd04b3291b23ba2a1a1a646`);
  }






}
