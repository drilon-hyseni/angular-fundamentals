import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getFanFavouriteMovies() {
    return this.httpClient.get<any[]>('assets/Data/fanFavourites.json');
  }

  getTopMovies() {
    return this.httpClient.get<any[]>('assets/Data/topmovies.json');
  }
}
