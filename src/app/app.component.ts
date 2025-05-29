import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuVisible: boolean = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateToParkingStatus() {
    this.router.navigate(['/parking-status']);
  }
}