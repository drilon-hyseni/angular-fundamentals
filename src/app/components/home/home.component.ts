import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderDirective } from '../../directives/header.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor() {}

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
