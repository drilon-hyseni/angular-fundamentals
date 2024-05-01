import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsActorsComponent } from './components/app-details-actors/app-details-actors.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { FetchBackend } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'details/actors/:id', component: DetailsActorsComponent },
  { path: 'details/movies/:id', component: DetailsMoviesComponent },
  { path: 'details/reviews/:id', component: DetailsReviewsComponent },
  //   { path: 'feedback', component: FeedbackComponent },
  { path: 'search/:movieTitle', component: SearchComponent },
];
