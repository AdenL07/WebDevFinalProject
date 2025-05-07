import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form : User = { username: '', password: '' };
  error = '';

  constructor(private api: ApiService, private router: Router, private auth: AuthService) {}

  login() {
    this.api.login(this.form).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.auth.notifyLogin();
        this.router.navigate(['/home']);
      },
      error: () => {
        this.error = 'Invalid credentials';
      }
    });
  }
}
