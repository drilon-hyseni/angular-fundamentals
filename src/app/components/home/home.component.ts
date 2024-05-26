import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeaderDirective } from '../../directives/header.directive';
import { Title } from '@angular/platform-browser';
import { MyIfDirective } from '../../directives/my-if.directive';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderDirective, MyIfDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  //Dependecy injection
  private httpClientOther = inject(HttpClient);

  constructor(private moviesService: MoviesService) {}

  isVisible = false;

  isActive = true;

  fanFavourtieMovies: any[] = [];
  topMovies: any[] = [];

  ngOnInit(): void {
    this.getFanFavouriteMovies();
    this.getTopMovies();
  }

  getFanFavouriteMovies() {
    this.moviesService.getFanFavouriteMovies().subscribe((data: any[]) => {
      console.log('fanfavourites', data);
      this.fanFavourtieMovies = data;
    });
  }

  getTopMovies() {
    this.moviesService.getTopMovies().subscribe((data: any[]) => {
      console.log('topmovies', data);
      this.topMovies = data;
    });
  }
}
