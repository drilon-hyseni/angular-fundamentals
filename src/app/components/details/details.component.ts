import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DetailsReviewsComponent } from '../details-reviews/details-reviews.component';
import { DetailsMoviesComponent } from '../details-movies/details-movies.component';
import { DetailsActorsComponent } from '../app-details-actors/app-details-actors.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    DetailsReviewsComponent,
    DetailsMoviesComponent,
    DetailsActorsComponent,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent
  implements OnInit, OnChanges, AfterContentInit, AfterViewInit
{
  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
}
