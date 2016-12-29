import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class MovieService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private movieUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=4bba7e2b1666fe7e1b7d04e3bd0eb45b&language=en"  // URL to web api
  private baseUrl1 = "https://api.themoviedb.org/3/movie/";
  private baseUrl2 = "?api_key=4bba7e2b1666fe7e1b7d04e3bd0eb45b&language=en";

  constructor(private http: Http) { }

  getMovies(): Observable<[]> {
    return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=4bba7e2b1666fe7e1b7d04e3bd0eb45b&language=en")
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getMovie(id: number): Observable<[]> {
    return this.http
        .get(`${this.baseUrl1}${id}${this.baseUrl2}`)
        .map((response: Response) => response.json());
  }

  private extractData(res: Response) {
    let body = res.json();
    //console.log(body.results);
    return body.results || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}