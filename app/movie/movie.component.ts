import 'rxjs/add/operator/switchMap';
import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { MovieService } from '../shared/movie.service';
import { User } from '../shared/models/user';


@Component({
  selector: 'movie',
  templateUrl: './app/movie/movie.component.html',
  styleUrls: ['./app/app.component.css']
})
export class MovieComponent implements OnInit {
	message: string;
	movie =[];
  @Input() user ={
    id: 1, name :"kina", username : "dragonis"
  }
	constructor(
      private movieService: MovieService,
      private route: ActivatedRoute,
      private location: Location
    ) {}
    ngOnInit(): void {
      this.message = "hello";
      this.getMovie();
    }
    getMovie() {
      this.route.params
        .switchMap((params: Params) => this.movieService.getMovie(+params['id']))
        .subscribe(movie => this.movie = movie);
    }
    goBack(): void {
      this.location.back();
    }
}