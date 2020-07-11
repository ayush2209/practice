import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.css']
})
export class NewsApiComponent implements OnInit {

  constructor(private service: NewsApiService, private http: HttpClient) {
    this.getNews('in');
  }
  indaiaNews: any = [];

  getNews(country) {
    this.service.getNewsApi(country).subscribe(data => {
      this.indaiaNews = data.articles;
      console.log(this.indaiaNews);
    });
  }
  ngOnInit() {
  }

}
