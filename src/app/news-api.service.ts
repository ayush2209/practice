import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  public country = 'in';

  newApi = `https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=31e2993679a3420ca7cb87c243ddde8d`;
  constructor(private http: HttpClient) {
  }
  getNewsApi(country) {
    return this.http.get<any>(`${this.newApi}`);
  }
}
