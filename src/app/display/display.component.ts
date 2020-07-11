import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private service: MovieService) {
    this.getData();
  }
  movie = [];
  // 1
  moviewId = {
    _id: '',
    fullname: '',
    earn: ''
  };
  getData() {
    this.service.getData().subscribe(data => {
      this.movie = data;
      console.log('Movie', this.movie);
    });
  }

  editData(name) {
    this.moviewId = name;
    console.log(this.moviewId, 'Movie ID ');
  }
  updateData(updateMovie: NgForm) {
    this.service.editMovie(updateMovie).subscribe(data => {
      console.log(data);
      this.getData();
      updateMovie.reset();
    }, err => {
      console.log(err);
    });
    console.log('Updated Form Data', updateMovie.value);
  }
  deleteData(id) {
    console.log(id);
    this.service.deleteMovie(id).subscribe(del => {
      console.log(del);
      this.getData();
    }, err => {
      console.log(err);
    }, () => {
      console.log('Deleted SucessFully');
    });
  }
  ngOnInit() {
  }
}
