import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderDirective } from '../../directives/header.directive';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor() {}

  isVisible = false;

  fanFavourtieMovies: any[] = [
    {
      imageUrl: '../../../assets/images/paris.jpg',
      title: 'Movie Title',
      actors: 'Movie Actors',
      year: '2023',
      rate: 9.5,
      rank: 1,
    },
    {
      imageUrl: '../../../assets/images/paris.jpg',
      title: 'Movie 22 Title',
      actors: 'Movie 22 Actors',
      year: '2023',
      rate: 8.2,
      rank: 2,
    },
    {
      imageUrl: '../../../assets/images/paris.jpg',
      title: 'Movie 33 Title',
      actors: 'Movie 33 Actors',
      year: '2023',
      rate: 7.8,
      rank: 3,
    },
    {
      imageUrl: '../../../assets/images/paris.jpg',
      title: 'Movie 4 Title',
      actors: 'Movie 4 Actors',
      year: '2023',
      rate: 4.2,
      rank: 3,
    },
  ];

  topMovies: any[] = [
    {
      imageUrl: '../../../assets/images/paris.jpg',
      title: 'Movie Title',
      actors: 'Movie Actors',
      year: '2023',
      rate: 9.5,
      rank: 1,
    },
    {
      imageUrl: '../../../assets/images/paris.jpg',
      title: 'Movie 22 Title',
      actors: 'Movie 22 Actors',
      year: '2023',
      rate: 8.2,
      rank: 2,
    },
  ];

  // currentStyles: Record<string, string> = {};
  // isCentered = true;
  // isSuccess = false;
  // isLarge = true;
  // constructor() {
  //   this.currentStyles = {
  //     'text-align': this.isCentered ? 'center' : '',
  //     color: this.isSuccess ? 'green' : 'red',
  //     'font-size': this.isLarge ? 'large' : 'small',
  //   };
  // }
}
