import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public movieTitle = '';

  constructor(private router: Router) {}
  search() {
    if (this.movieTitle.trim()) {
      this.router.navigate(['/search', this.movieTitle]);
    }
  }
}
