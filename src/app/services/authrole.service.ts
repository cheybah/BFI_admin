import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthRoleService {

  private readonly ROLE_KEY = 'role';
  private readonly TOKEN_KEY = 'token';

  constructor(private router : Router) { }

  public setRole(role: string): void {
    localStorage.setItem(this.ROLE_KEY, role);
  }

  public getRole(): string | null {
    return localStorage.getItem(this.ROLE_KEY);
  }

  public setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public clearStorage() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  public isLoggedIn() {
    return this.getRole() !== null && this.getToken() !== null; 
  }
}