import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private $http: HttpClient) { }

    getData(): Observable<any> {
        let headers = new HttpHeaders();
        return this.$http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=f933b0ceef38971869139f92053b6090&language=en-US&page=1' );
    }

    getVideo(): Observable<any> {
        let headers = new HttpHeaders();
        return this.$http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=f933b0ceef38971869139f92053b6090&language=en-US&page=1' );
    }
}
