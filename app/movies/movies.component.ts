import 'rxjs/add/operator/switchMap';
import { Subject }           from 'rxjs/Subject';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { MovieService } from '../shared/movie.service';


@Component({
  selector: 'movie',
  templateUrl: './app/movies/movies.component.html',
  styleUrls: ['./app/app.component.css']
})
export class MoviesComponent implements OnInit {
  message: string = "hello!";
    errorMessage: string;
    movies =[];
    mode = 'Observable';
    color = "yellow";
    
    private searchTerms = new Subject<string>();
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
  
  // Push a search term into the observable stream.
 /* search(term: string): void {
    this.searchTerms.next(term);
  }*/
}