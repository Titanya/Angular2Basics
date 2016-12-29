import { Component, OnInit } from '@angular/core';
import { User } from 'shared/models/user';
import { MovieService } from './shared/movie.service';


@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent implements OnInit{
	message: string = "hello!";
    errorMessage: string;
    movies =[];
    mode = 'Observable'
	constructor (private movieService: MovieService) {}
    users: User[] =[
	  {id: 25, name: 'jouda', username: 'what u doing'},
	  {id :26, name: 'dallou', username: 'she is dancing'},
	  {id: 27, name: 'brava', username: 'my car!!'}
	];
	ngOnInit(): void {
      this.getMovies();
    }
    getMovies() {
    this.movieService.getMovies()
                     .subscribe(
                       movies => this.movies = movies,
                       error =>  this.errorMessage = <any>error);
  }
}