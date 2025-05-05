import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit { 
  
    isLoggedIn = false;
  
    constructor(private authService: AuthService) {}
  
    ngOnInit() {
      this.authService.isLoggedIn$.subscribe(status => {
        this.isLoggedIn = status;
      });
    }
  

  
}
