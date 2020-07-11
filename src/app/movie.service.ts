import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  url = 'https://crud-f9a5e.firebaseio.com/';

  postData(data) {
    console.log(data, 'Service');
    return this.http.post(`${this.url}/addData.json`, data);
  }

  getData() {
    return this.http.get(`${this.url}/addData.json`).pipe(map(data => {
      const newArray: any[] = [];
      // tslint:disable-next-line: forin
      for (const key in data) {
        newArray.push({ ...data[key], id: key });
      }
      return newArray;
    }));
  }

  editMovie(form: NgForm) {
    return this.http.put(`${this.url}addData/${form.value.id}.json`, form.value);
  }

  deleteMovie(movie) {
    console.log('id' , movie);
    return this.http.delete(`${this.url}/addData/${movie.id}.json`);
  }
}
