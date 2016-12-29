import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { MovieService } from './shared/movie.service';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { HighlightDirective } from './highlight.directive';
import { ShadowLightDirective } from './shadow.directive';



import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
   BrowserModule,
   FormsModule,
   HttpModule, 
   AppRoutingModule 
],
  declarations: [ 
    AppComponent,
    MovieComponent,
    MoviesComponent,
    HighlightDirective,
    ShadowLightDirective
],
providers: [ MovieService ],
bootstrap: [ AppComponent ]
})
export class AppModule {}