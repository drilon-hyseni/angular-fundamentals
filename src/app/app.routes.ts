import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsActorsComponent } from './components/app-details-actors/app-details-actors.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'details/actors', component: DetailsActorsComponent },
  { path: 'details/movies', component: DetailsMoviesComponent },
  { path: 'details/reviews', component: DetailsReviewsComponent },
];
