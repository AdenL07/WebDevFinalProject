import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public loginStatus = new BehaviorSubject<boolean>(this.hasToken());

  isLoggedIn$: Observable<boolean> = this.loginStatus.asObservable();

  constructor() {
    this.loginStatus.next(this.hasToken());
  }

  public hasToken(): boolean {
    return (localStorage.getItem('token') ? true : false);
  }

  //user logs in
  public notifyLogin(): void {
    this.loginStatus.next(true);
  }

}
