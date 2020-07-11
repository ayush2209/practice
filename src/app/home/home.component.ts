import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieService , private router: Router) { }
  addData(addMovie: NgForm) {
    console.log(addMovie.value);
    this.service.postData(addMovie.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/display']);
      addMovie.reset();
    }, err => {
      console.log(err);
    }, () => {
      console.log('Data Added');
    });
  }

  ngOnInit() {
  }

}
