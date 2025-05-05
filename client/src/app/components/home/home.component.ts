import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterModule, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  isLoggedIn = false;
    
      constructor(private authService: AuthService) {}
    
      ngOnInit() {
        this.authService.isLoggedIn$.subscribe(status => {
          this.isLoggedIn = status;
        });
      }

}

