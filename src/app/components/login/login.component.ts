import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  selectedRole: string = '';
  
  roles: string[] = ['User', 'Entry Gate Operator', 'Exit Gate Operator'];

  users = [
    { username: 'user1', password: 'password1', role: 'User' },
    { username: 'entryOperator', password: 'entryPass', role: 'Entry Gate Operator' },
    { username: 'exitOperator', password: 'exitPass', role: 'Exit Gate Operator' }
  ];

  constructor(private router: Router) {}

  login() {
  const user = this.users.find(u =>
    u.username === this.username &&
    u.password === this.password &&
    u.role === this.selectedRole
  );

  if (user) {
    alert('Login successful!');
    localStorage.setItem('isLoggedIn', 'true'); // Store login status
    localStorage.setItem('role', this.selectedRole); // Store user role
    this.router.navigate(['/parking-status']); // Redirect to parking status
  } else {
    alert('Invalid credentials or role');
  }
}
}