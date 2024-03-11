import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './clients.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  deleteUser(userId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${userId}`;
    return this.http.delete<void>(deleteUrl);
  }
  private readonly apiUrl = 'http://localhost:8080/users'; // Mettez l'URL correcte de votre backend

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }
}