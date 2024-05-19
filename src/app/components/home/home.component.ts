import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderDirective } from '../../directives/header.directive';
import { Title } from '@angular/platform-browser';
import { MyIfDirective } from '../../directives/my-if.directive';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderDirective, MyIfDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  //Inject HttpClient
  constructor(private httpClient: HttpClient) {}

  isVisible = false;

  isActive = true;

  fanFavourtieMovies: any[] = [];
  topMovies: any[] = [];

  ngOnInit(): void {
    this.getFanFavouriteMovies();
    this.getTopMovies();
  }

  getFanFavouriteMovies() {
    this.httpClient
      .get<any[]>('assets/Data/fanFavourites.json')
      .subscribe((data: any[]) => {
        console.log('fanfavourites', data);
        this.fanFavourtieMovies = data;
      });
  }

  getTopMovies() {
    this.httpClient
      .get<any[]>('assets/Data/topmovies.json')
      .subscribe((data: any[]) => {
        console.log('topmovies', data);
        this.topMovies = data;
      });
  }
}
