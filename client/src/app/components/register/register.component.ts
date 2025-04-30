import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = {
    username: '',
    password: ''
  };

  message = '';

  constructor(private api: ApiService, private router: Router) {}

  register() {
    this.api.register(this.form).subscribe({
      next: () => {
        this.message = 'Registration successful! Redirecting...';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        this.message = 'Registration failed. Try a different username.';
        console.error(err);
      }
    });
  }
}
