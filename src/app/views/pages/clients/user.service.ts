import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './clients.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = 'http://localhost:8080/adminUsers'; // Mettez l'URL correcte de votre backend
  constructor(private http: HttpClient) { }

  deleteUser(userId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${userId}`;
    return this.http.delete<void>(deleteUrl);
  }


  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }
  editUser(user: IUser): Observable<void> {
    const editUrl = `${this.apiUrl}/${user.id}`;
    // Utilisez une requête PUT ou PATCH pour la modification, en envoyant les données modifiées
    return this.http.put<void>(editUrl, user);
  }
  private readonly archiveapiUrl = 'http://localhost:8080/archived-users'; // Mettez l'URL correcte de votre backend

  getAllArchivedUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.archiveapiUrl);
  }
  
}