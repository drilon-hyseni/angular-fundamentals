import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentStyles: Record<string, string> = {};

  isCentered = true;
  isSuccess = false;
  isLarge = true;
  constructor() {
    this.currentStyles = {
      'text-align': this.isCentered ? 'center' : '',
      color: this.isSuccess ? 'green' : 'red',
      'font-size': this.isLarge ? 'large' : 'small',
    };
  }
}
